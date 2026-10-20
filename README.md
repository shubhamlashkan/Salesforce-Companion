# Salesforce Companion

Salesforce Companion is a Chrome extension that makes everyday Salesforce development tasks a little easier. It adds a sidebar with quick links to commonly used Setup pages and a set of utilities for working with Salesforce records.

I built this extension to reduce the time spent navigating through Salesforce and to make frequently used developer tools easier to access.

**Chrome Web Store:** [Salesforce Companion](https://chromewebstore.google.com/detail/salesforce-companion/apmdmekheggcegdfhlnkcpmmaahhdmol)

## Features

- Quick access to commonly used Salesforce Setup pages
- Searchable navigation sidebar
- Salesforce environment detection
- Copy record IDs
- View field API names on record pages
- Generate SOQL queries from available record fields
- Clone records on supported Lightning pages
- Quick access to the Salesforce Developer Console
- Keyboard shortcuts for common actions

## Getting Started

### Prerequisites

- Google Chrome or a Chromium-based browser
- Access to a Salesforce org

### Run Locally

1. Clone this repository:

   ```bash
   git clone <https://github.com/shubhamlashkan/Salesforce-Companion.git>
   ```

2. Open `chrome://extensions` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the project directory containing `manifest.json`.
6. Open your Salesforce org and start using the extension.

After making changes, reload the extension from `chrome://extensions` and refresh the Salesforce tab.

## Project Structure

```text
salesforce-companion/
├── manifest.json
├── background.js
├── content.js
├── sections.js
└── images/
    ├── icon16.png
    ├── icon32.png
    ├── icon48.png
    └── icon128.png
```

- `manifest.json` — Extension configuration, permissions, content scripts, and keyboard commands.
- `background.js` — Background functionality and keyboard shortcut handling.
- `content.js` — Sidebar interface and Salesforce page utilities.
- `sections.js` — Navigation sections and links.
- `images/` — Extension icons.

## Keyboard Shortcuts

| Action | Shortcut |
| --- | --- |
| Open Developer Console | `Alt + Shift + D` |
| Open Object Manager | `Alt + Shift + O` |
| Switch between Lightning and Classic | `Alt + Shift + L` |

Shortcuts can be managed from `chrome://extensions/shortcuts`.

## Development

The extension uses plain JavaScript and Chrome Extension Manifest V3 APIs. There is currently no separate build step required.

If you're making changes, test them in a Salesforce sandbox before using them in a production org. Salesforce page layouts and navigation behavior can vary between orgs.

## Contributing

Suggestions, bug reports, and contributions are welcome.

If you find a bug or have an idea for an improvement, feel free to open an issue or submit a pull request.

## License

A license has not yet been specified. Please check the repository for licensing terms before reusing or distributing the code.
