import fs from "fs";
import path from "path";

// 入口文件夹路径
const inputFolder = path.resolve(process.cwd(), "src/sharedApps");
const inputChildFolder = path.resolve(process.cwd(), "src/subapps");

// 获取多页面入口
function getInputs() {
  // const mainInput = {};
  const mainInput = getMainInput();
  const childInput = getChildInput();

  console.log({ ...mainInput, ...childInput });

  return { ...mainInput, ...childInput };
}

function getMainInput() {
  const inputs = {};
  const apps = fs.readdirSync(inputFolder);

  apps.forEach((app) => {
    const appPath = path.join(inputFolder, app);
    const indexPath = path.resolve(appPath, "index.html");

    if (fs.statSync(appPath).isDirectory() && fs.existsSync(indexPath)) {
      inputs[app] = indexPath;
    }
  });

  return inputs;
}
function getChildInput() {
  const inputs = {};
  const apps = fs.readdirSync(inputChildFolder);

  apps.forEach((app) => {
    const appPath = path.join(inputChildFolder, app);
    const indexPath = path.resolve(appPath, "index.html");

    if (fs.statSync(appPath).isDirectory() && fs.existsSync(indexPath)) {
      inputs[app] = indexPath;
    }
  });

  return inputs;
}

export default getInputs;
