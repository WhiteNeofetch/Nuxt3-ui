module.exports = {
  apps: [
    {
      name: "NuxtAppName",
      exec_mode: "fork",
      env: {
        port: 3010,
        host: "127.0.0.1",
      },
      instances: "1",
      script: "./.output/server/index.mjs",
    },
  ],
};
