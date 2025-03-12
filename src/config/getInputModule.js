import fs from "fs";
import path from "path";

// 入口文件夹路径
const inputFolder = path.resolve(process.cwd(), "src/subapps");

// 获取多页面入口
function getInputs() {
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

export default getInputs;
