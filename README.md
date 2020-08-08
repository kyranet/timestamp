# @skyra/timestamp

[![GitHub](https://img.shields.io/github/license/skyra-project/timestamp)](https://github.com/skyra-project/timestamp/blob/main/LICENSE.md)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/skyra-project/timestamp.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/skyra-project/timestamp/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/skyra-project/timestamp.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/skyra-project/timestamp/context:javascript)
[![Coverage Status](https://coveralls.io/repos/github/skyra-project/timestamp/badge.svg?branch=main)](https://coveralls.io/github/skyra-project/timestamp?branch=main)
[![Depfu](https://badges.depfu.com/badges/e367f2c68b857253ca23e1e8d73d1e14/count.svg)](https://depfu.com/github/skyra-project/timestamp?project_id=14147)

[![npm](https://img.shields.io/npm/v/@skyra/timestamp?color=crimson&label=NPM&logo=npm&style=flat-square)](https://www.npmjs.com/package/@skyra/timestamp)
![npm bundle size minified (scoped)](https://img.shields.io/bundlephobia/min/@skyra/timestamp?label=minified&logo=webpack)
![npm bundle size minzipped (scoped)](https://img.shields.io/bundlephobia/minzip/@skyra/timestamp?label=minified&logo=webpack)

**Table of Contents**

-   [@skyra/timestamp](#skyratimestamp)
    -   [About](#about)
    -   [Installation and Usage](#installation-and-usage)
        -   [Package managers](#package-managers)
            -   [Usage](#usage)
        -   [Browser build](#browser-build)
            -   [Usage](#usage-1)
    -   [Meta](#meta)
        -   [License](#license)
        -   [Contributing](#contributing)
        -   [Buy us some doughnuts](#buy-us-some-doughnuts)
        -   [Contributors ✨](#contributors-%E2%9C%A8)

## About

-   @skyra/timestamp is a character utility library inspired by [moment.js](https://momentjs.com)'s
    patterns that uses a token repetition scanner instead of RegExp, making it
    invulnerable to possible [ReDoS](https://en.wikipedia.org/wiki/ReDoS) attacks. Furthermore it is made so the
    pattern can be cached and re-used for better performance.
-   Supports both NodeJS and Browsers by providing CommonJS, ES Module and UMD bundles.

## Installation and Usage

### Package managers

```bash
yarn add @skyra/timestamp
# or npm install @skyra/timestamp
```

#### Usage

```js
const { Timestamp } = require('@skyra/timestamp');
```

```ts
import { Timestamp } from '@skyra/timestamp';
```

### Browser build

If you want to use the browser build you can pull it directly via unpkg. Note that when using a Framework such as React, Vue or Angular we recommend you refer to [the package managers section.](#package-managers)

```html
<script src="https://unpkg.com/@skyra/timestamp"></script>
```

#### Usage

The UMD module is exported as `SkyraTimestamp`:

```html
<script>
	new SkyraTimestamp.Timestamp('hh:mm:ss');
</script>
```

## Meta

### License

Copyright © 2020, [Skyra Project](https://github.com/skyra-project).
Released under the [MIT License](LICENSE.md).

### Contributing

1. Fork it!
1. Create your feature branch: `git checkout -b my-new-feature`
1. Commit your changes: `git commit -am 'Add some feature'`
1. Push to the branch: `git push origin my-new-feature`
1. Submit a pull request!

### Buy us some doughnuts

Skyra Project is open source and always will be, even if we don't get donations. That said, we know there are amazing people who
may still want to donate just to show their appreciation. Thanks you very much in advance!

We accept donations through Patreon, BitCoin, Ethereum, and Litecoin. You can use the buttoms below to donate through your method of choice.

| Donate With |         QR         |                                                                  Address                                                                  |
| :---------: | :----------------: | :---------------------------------------------------------------------------------------------------------------------------------------: |
|   Patreon   | ![PatreonImage][]  |                                               [Click Here](https://www.patreon.com/kyranet)                                               |
|   PayPal    |  ![PayPalImage][]  |                     [Click Here](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CET28NRZTDQ8L)                      |
|   BitCoin   | ![BitcoinImage][]  |         [3JNzCHMTFtxYFWBnVtDM9Tt34zFbKvdwco](bitcoin:3JNzCHMTFtxYFWBnVtDM9Tt34zFbKvdwco?amount=0.01&label=Skyra%20Discord%20Bot)          |
|  Ethereum   | ![EthereumImage][] | [0xcB5EDB76Bc9E389514F905D9680589004C00190c](ethereum:0xcB5EDB76Bc9E389514F905D9680589004C00190c?amount=0.01&label=Skyra%20Discord%20Bot) |
|  Litecoin   | ![LitecoinImage][] |         [MNVT1keYGMfGp7vWmcYjCS8ntU8LNvjnqM](litecoin:MNVT1keYGMfGp7vWmcYjCS8ntU8LNvjnqM?amount=0.01&label=Skyra%20Discord%20Bot)         |

[patreonimage]: https://cdn.skyra.pw/gh-assets/patreon.png
[paypalimage]: https://cdn.skyra.pw/gh-assets/paypal.png
[bitcoinimage]: https://cdn.skyra.pw/gh-assets/bitcoin.png
[ethereumimage]: https://cdn.skyra.pw/gh-assets/ethereum.png
[litecoinimage]: https://cdn.skyra.pw/gh-assets/litecoin.png

### Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/kyranet"><img src="https://avatars0.githubusercontent.com/u/24852502?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Antonio Román</b></sub></a><br /><a href="https://github.com/skyra-project/timestamp/commits?author=kyranet" title="Code">💻</a> <a href="https://github.com/skyra-project/timestamp/commits?author=kyranet" title="Tests">⚠️</a> <a href="#ideas-kyranet" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-kyranet" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
