import { defineConfig } from 'wxt';
import svgr from 'vite-plugin-svgr';
import yargsParser from 'yargs-parser';

const args = yargsParser(process.argv.slice(2));

const isFirefox = args.b === 'firefox';

export default defineConfig({
  // entrypointLoader: 'jiti',
  // extensionApi: 'chrome',
  modules: ['@wxt-dev/module-react'],
  vite: () => ({
    plugins: [svgr({ svgrOptions: { icon: true } })],
  }),
  manifest: {
    name: 'Nice Tab Manager | 标签页管理器',
    permissions: [
      'storage',
      'tabs',
      'contextMenus',
      'unlimitedStorage',
      'alarms',
      ...(isFirefox ? [] : ['tabGroups', 'commands', 'favicon']),
    ],
    homepage_url: 'https://github.com/web-dahuyou/NiceTab',
    host_permissions: ['<all_urls>'],
    default_locale: 'zh_CN',
    content_security_policy: isFirefox
      ? "script-src 'self'; object-src 'self';"
      : {
          extension_pages: "script-src 'self' 'wasm-unsafe-eval'; object-src 'self';",
          sandbox:
            "sandbox allow-scripts; script-src 'self' https://api.github.com https://gitee.com; object-src 'self'",
        },
    commands: {
      'action:openAdminTab': {
        suggested_key: {
          default: 'Alt+Shift+M',
        },
        description: '__MSG_action_openAdminTab__',
      },
      'action:sendAllTabs': {
        suggested_key: {
          default: 'Alt+Shift+A',
        },
        description: '__MSG_action_sendAllTabs__',
      },
      'action:sendCurrentTab': {
        suggested_key: {
          default: 'Alt+Shift+C',
        },
        description: '__MSG_action_sendCurrentTab__',
      },
      'action:sendOtherTabs': {
        description: '__MSG_action_sendOtherTabs__',
      },
      'action:sendLeftTabs': {
        description: '__MSG_action_sendLeftTabs__',
      },
      'action:sendRightTabs': {
        description: '__MSG_action_sendRightTabs__',
      },
      // 激活option面板
      _execute_action: {
        suggested_key: {
          default: 'Alt+Shift+P',
        },
      },
    },
  },
});
