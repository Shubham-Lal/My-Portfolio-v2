import displaySpotify from './components/apps/spotify';
import displayVsCode from './components/apps/vscode';
import { displayTerminal } from './components/apps/terminal';
import { displaySettings } from './components/apps/settings';
import { displayChrome } from './components/apps/chrome';
import { displayTrash } from './components/apps/trash';
import { displayGedit } from './components/apps/gedit';
import { displayAboutShubham } from './components/apps/shubham';
import { displayTerminalCalc } from './components/apps/calc';
import displayClangSocial from './components/apps/clang-social';
import displayMyReddit from './components/apps/my-reddit';
import displayInfix from './components/apps/infix';
import displayGDSC_BIT from './components/apps/gdsc-bit';
import displayDrawingApp from './components/apps/drawing';
import displayMyGitHub from './components/apps/my-github';
import displayTaskTrack from './components/apps/task-track';

const apps = [
    {
        id: "about-shubham",
        title: "About Me",
        icon: './themes/Yaru/apps/my_logo.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayAboutShubham,
    },
    {
        id: "gdsc",
        title: "GDSC BIT",
        icon: './themes/Yaru/apps/gdsc_bit.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayGDSC_BIT,
    },
    {
        id: "chrome",
        title: "Google Chrome",
        icon: './themes/Yaru/apps/chrome.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayChrome,
    },
    {
        id: "calc",
        title: "Calc",
        icon: './themes/Yaru/apps/calc.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminalCalc,
    },
    {
        id: "vscode",
        title: "Visual Studio Code",
        icon: './themes/Yaru/apps/vscode.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayVsCode,
    },
    {
        id: "terminal",
        title: "Terminal",
        icon: './themes/Yaru/apps/bash.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminal,
    },
    {
        id: "spotify",
        title: "Spotify",
        icon: './themes/Yaru/apps/spotify.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySpotify, // My Fav Playlist 😅
    },
    {
        id: "gedit",
        title: "Contact Me",
        icon: './themes/Yaru/apps/gedit.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayGedit,
    },
    {
        id: "trash",
        title: "Trash",
        icon: './themes/Yaru/system/user-trash-full.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayTrash,
    },
    {
        id: "clang-social",
        title: "Clang Social",
        icon: './themes/Yaru/apps/clang.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayClangSocial,
    },
    {
        id: "reddit-clone",
        title: "Reddit Clone",
        icon: './themes/Yaru/apps/reddit.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayMyReddit,
    },
    {
        id: "infix",
        title: "Infix Operations",
        icon: './themes/Yaru/apps/infix.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayInfix,
    },
    {
        id: "settings",
        title: "Settings",
        icon: './themes/Yaru/apps/gnome-control-center.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySettings,
    },
    {
        id: "drawing",
        title: "Drawing App ",
        icon: './themes/Yaru/apps/drawing.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayDrawingApp
    },
    {
        id: "github",
        title: "GitHub Clone",
        icon: './themes/Yaru/apps/github.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayMyGitHub
    },
    {
        id: "task-track",
        title: "Task Track",
        icon: './themes/Yaru/apps/task-track.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayTaskTrack
    },
]

export default apps;
