const TOKEN_KEY = "user_token";
const USER_INFO = "user_info";

// Token 相关操作
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

// 用户信息相关操作
export function getUserInfo() {
  const userInfo = localStorage.getItem(USER_INFO);
  return userInfo ? JSON.parse(userInfo) : null;
}

export function setUserInfo(info) {
  localStorage.setItem(USER_INFO, JSON.stringify(info));
}

export function removeUserInfo() {
  localStorage.removeItem(USER_INFO);
}

// 登录状态检查
export function isAuthenticated() {
  return !!getToken();
}

// 清除所有认证信息
export function clearAuth() {
  removeToken();
  removeUserInfo();
}

// 登录
export async function login(username, password) {
  try {
    // 这里替换为实际的登录 API 调用
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("登录失败");
    }

    const data = await response.json();
    setToken(data.token);
    setUserInfo(data.userInfo);
    return true;
  } catch (error) {
    console.error("登录错误:", error);
    return false;
  }
}

// 登出
export function logout() {
  clearAuth();
  // 可以添加跳转到登录页等逻辑
  window.location.href = "/sharedApps/login/";
}
