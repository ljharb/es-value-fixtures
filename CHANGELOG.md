# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.7.1](https://github.com/ljharb/es-value-fixtures/compare/v1.7.0...v1.7.1) - 2025-01-23

### Commits

- [Dev Deps] update `@types/tape` [`dd4cca5`](https://github.com/ljharb/es-value-fixtures/commit/dd4cca53d0eeabb0ae9a1e50862a86dca7d5fe32)
- [types] add missing types [`5a269ea`](https://github.com/ljharb/es-value-fixtures/commit/5a269ea98e3a2765dfb07f93a4424b0a1c9fccfc)

## [v1.7.0](https://github.com/ljharb/es-value-fixtures/compare/v1.6.0...v1.7.0) - 2025-01-13

### Commits

- [New] add `v.descriptors.{getter,setter,value}` and use them [`59ff0c4`](https://github.com/ljharb/es-value-fixtures/commit/59ff0c44179f62611fc35ddf498123d2e11f9d75)
- [Dev Deps] update `@arethetypeswrong/cli` [`10753a5`](https://github.com/ljharb/es-value-fixtures/commit/10753a577d34870d3ed4fdf644615de40fbf4997)

## [v1.6.0](https://github.com/ljharb/es-value-fixtures/compare/v1.5.0...v1.6.0) - 2025-01-06

### Commits

- [Fix] add `Symbol.dispose` and `Symbol.asyncDispose` [`9e4be33`](https://github.com/ljharb/es-value-fixtures/commit/9e4be330ce785778f8eedafe0cb19d2bdc588c11)
- [New] add `registeredSymbols` and `unregisteredSymbols` [`d5c3ba2`](https://github.com/ljharb/es-value-fixtures/commit/d5c3ba284f5d93f79c17b435c9e88155318957b8)
- [Dev Deps] update `@arethetypeswrong/cli`, `@ljharb/tsconfig`, `@types/isarray`, `@types/reflect.ownkeys`, `@types/tape`, `array.prototype.flatmap`, `get-intrinsic`, `reflect.ownkeys`, `symbol.prototype.description` [`db35788`](https://github.com/ljharb/es-value-fixtures/commit/db3578884696b744937b65d61a7704968082da96)
- [Deps] update `has-bigints`, `has-symbols`, `intl-fallback-symbol`, `object.assign` [`3c24c8a`](https://github.com/ljharb/es-value-fixtures/commit/3c24c8a53a8d24e37fd0c17cddd200ef3660fe65)
- [types] ignore incorrect attw error [`a37fd24`](https://github.com/ljharb/es-value-fixtures/commit/a37fd240a0ca874c469b419db00c5f6cc000108c)

## [v1.5.0](https://github.com/ljharb/es-value-fixtures/compare/v1.4.2...v1.5.0) - 2024-09-19

### Commits

- [New] add types [`42ef99a`](https://github.com/ljharb/es-value-fixtures/commit/42ef99ad32e52c075abcc963b5d07784594df373)
- [Dev Deps] update `@ljharb/eslint-config`, `array.prototype.flatmap`, `aud`, `npmignore`, `reflect.ownkeys`, `tape` [`8b764f9`](https://github.com/ljharb/es-value-fixtures/commit/8b764f9feed0773cede9245f62eafc068eed879a)
- [Tests] add another sanity check for `wellKnownSymbols` [`33ea678`](https://github.com/ljharb/es-value-fixtures/commit/33ea678fba26dd74b0f44b9db73ad3427c334725)
- [actions] update checkout action [`4ae7ab4`](https://github.com/ljharb/es-value-fixtures/commit/4ae7ab4a03653bd2870482a78883f1fec0dc7a16)
- [Dev Deps] update `@ljharb/eslint-config`, `auto-changelog`, `symbol.prototype.description`, `tape` [`1faef62`](https://github.com/ljharb/es-value-fixtures/commit/1faef62699673f251197205417b9b22e6bff036c)
- [Fix] add some missing bigints to nonBooleans and truthies [`651811c`](https://github.com/ljharb/es-value-fixtures/commit/651811c3418b8da70789e4ac606ebaddc85456da)
- [Dev Deps] update `aud`, `tape` [`c10e0bb`](https://github.com/ljharb/es-value-fixtures/commit/c10e0bb1bf9e8f2ed98b9697fb85a7869442abdb)
- [Tests] replace `aud` with `npm audit` [`0713d42`](https://github.com/ljharb/es-value-fixtures/commit/0713d426f8e1b28ec3b1a2529e329dd19c0d09cc)
- [meta] add missing `engines.node` [`b29d495`](https://github.com/ljharb/es-value-fixtures/commit/b29d4953bd86979cd2a120f2b6ddb98a9a5073cc)
- [Deps] update `intl-fallback-symbol` [`85ac92b`](https://github.com/ljharb/es-value-fixtures/commit/85ac92b1bc62b25a8086cfdd7df8562d8beb26d7)
- [Tests] filter out broken node WKS polyfills (global registry symbols) [`eedd691`](https://github.com/ljharb/es-value-fixtures/commit/eedd6915edda2f02c964f2281c6b88776eeaedf6)
- [Deps] update `object.assign` [`e4dc5c9`](https://github.com/ljharb/es-value-fixtures/commit/e4dc5c9c0c2171ce620ffa87a98fffc66e25bc68)
- [Dev Deps] add missing peer dep [`4958415`](https://github.com/ljharb/es-value-fixtures/commit/495841573e06a58b6d0ab00e383240bab27ce433)
- [meta] add `sideEffects` flag [`e4d8fa7`](https://github.com/ljharb/es-value-fixtures/commit/e4d8fa7c2ed86d71ae9f15b5073791990a5ad363)

## [v1.4.2](https://github.com/ljharb/es-value-fixtures/compare/v1.4.1...v1.4.2) - 2022-07-20

### Commits

- [Fix] `IntlFallbackSymbol` is not a well-known symbol, reconfirmed per 2022.07.20 TC39 [`4b828eb`](https://github.com/ljharb/es-value-fixtures/commit/4b828ebcdf8e12af6cf7facae87649fd226db975)
- [Dev Deps] update `foreach` [`c3feace`](https://github.com/ljharb/es-value-fixtures/commit/c3feace821ea167b9333c6f4b8bcefbf207e28cf)

## [v1.4.1](https://github.com/ljharb/es-value-fixtures/compare/v1.4.0...v1.4.1) - 2022-05-05

### Commits

- [Fix] `v.assignedDescriptor` properly set the value [`2ac6855`](https://github.com/ljharb/es-value-fixtures/commit/2ac6855a4235de657cb19130951899638ee4f056)

## [v1.4.0](https://github.com/ljharb/es-value-fixtures/compare/v1.3.1...v1.4.0) - 2022-05-05

### Commits

- [meta] use `npmignore` to autogenerate an npmignore file [`e1e0e8f`](https://github.com/ljharb/es-value-fixtures/commit/e1e0e8fbd1188d634bbdceffa8c6be567a77ca58)
- [New] add `v.assignedDescriptor(value)` [`b9c4b68`](https://github.com/ljharb/es-value-fixtures/commit/b9c4b6810059151acc443a0cddb09bf20466e7d1)

## [v1.3.1](https://github.com/ljharb/es-value-fixtures/compare/v1.3.0...v1.3.1) - 2022-04-25

### Commits

- [Fix] add `intl-fallback-symbol` to `wellKnownSymbols` [`50a5740`](https://github.com/ljharb/es-value-fixtures/commit/50a5740c62f2b936c3743d3e5ada6e4a5c012371)

## [v1.3.0](https://github.com/ljharb/es-value-fixtures/compare/v1.2.1...v1.3.0) - 2022-04-24

### Commits

- [actions] reuse common workflows [`daa6f95`](https://github.com/ljharb/es-value-fixtures/commit/daa6f95db55e20074a15133080236f15c415f23b)
- [actions] use `node/install` instead of `node/run`; use `codecov` action [`82c5018`](https://github.com/ljharb/es-value-fixtures/commit/82c5018cb0d4b2caf01fed37b29a69c43ea6b0ad)
- [New] add `wellKnownSymbols` [`09be804`](https://github.com/ljharb/es-value-fixtures/commit/09be804c27a7a20493b472407cdaaf0d363b76c3)
- [actions] update codecov uploader [`36d3723`](https://github.com/ljharb/es-value-fixtures/commit/36d3723e5ffa71bf0cf9612bf2cec31a5d9ef36d)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `auto-changelog`, `tape` [`012e579`](https://github.com/ljharb/es-value-fixtures/commit/012e57954f9998596f5edd72def66288b5c6fa6f)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `auto-changelog`, `tape` [`c962990`](https://github.com/ljharb/es-value-fixtures/commit/c962990f6a43b4de55829248c00dc8bad40c377c)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `safe-publish-latest`, `tape` [`750a189`](https://github.com/ljharb/es-value-fixtures/commit/750a189c98b1ca80bcb14bc9f50f5ede5c08cd70)
- [meta] simplify "exports" [`3351b98`](https://github.com/ljharb/es-value-fixtures/commit/3351b9896bfbb08f2618a4cd64fcab2760e8bdc2)
- [Deps] update `has-bigints`, `has-symbols` [`a2c65f4`](https://github.com/ljharb/es-value-fixtures/commit/a2c65f45bdf8f36f2af51ed04fcea7040cfe82e7)
- [Dev Deps] update `eslint`, `tape` [`4502b8f`](https://github.com/ljharb/es-value-fixtures/commit/4502b8f87208bd0507da65992d4ceeab2bb14215)
- [meta] use `prepublishOnly` script for npm 7+ [`4fd486b`](https://github.com/ljharb/es-value-fixtures/commit/4fd486b7111548be51e4f779cbbfd105c3f96981)
- [Tests] sort fixture names before comparing [`4ef2d6b`](https://github.com/ljharb/es-value-fixtures/commit/4ef2d6b1a61676e4ea9e5e2b0b62358cb7d53adf)
- [Dev Deps] update `@ljharb/eslint-config` [`4c0e3bc`](https://github.com/ljharb/es-value-fixtures/commit/4c0e3bcebc2128c2b56c0bdb28dfc3b6a7413298)
- [Deps] update `has-symbols` [`a73b6cf`](https://github.com/ljharb/es-value-fixtures/commit/a73b6cf74497ee1a36e259d8431635af372a525b)
- [Tests] fix omission from 8b85bae [`e71399c`](https://github.com/ljharb/es-value-fixtures/commit/e71399c77e28d609117a675f3a4d36e414bca7fa)

## [v1.2.1](https://github.com/ljharb/es-value-fixtures/compare/v1.2.0...v1.2.1) - 2021-02-14

### Commits

- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud` [`01f838d`](https://github.com/ljharb/es-value-fixtures/commit/01f838d67283999139a453fc7800634a90d3c6f7)
- [Fix] move prod deps from dev to prod section [`41375bc`](https://github.com/ljharb/es-value-fixtures/commit/41375bc50308d7ffdd603dc30308ad4f6dc43e73)

## [v1.2.0](https://github.com/ljharb/es-value-fixtures/compare/v1.1.0...v1.2.0) - 2021-02-04

### Commits

- [New] add `bigints` [`8b85bae`](https://github.com/ljharb/es-value-fixtures/commit/8b85baec40a3616e1936560909dc85b7809c2e99)

## [v1.1.0](https://github.com/ljharb/es-value-fixtures/compare/v1.0.0...v1.1.0) - 2021-02-04

### Commits

- [Tests] migrate to github actions; run `nyc` on all tests [`b01abdb`](https://github.com/ljharb/es-value-fixtures/commit/b01abdb8b1242f294764cdeb73f682607f73b6eb)
- [meta] do not publish github action workflow files [`b296cff`](https://github.com/ljharb/es-value-fixtures/commit/b296cff5e3fa392438aebb5513c7015c8259643d)
- [actions] remove misplaced workflow files [`d898f7d`](https://github.com/ljharb/es-value-fixtures/commit/d898f7dc26297b34145a5531c0b80150b8d2f066)
- [meta] add Automatic Rebase and Require Allow Edits workflows [`991dd63`](https://github.com/ljharb/es-value-fixtures/commit/991dd6347bd0a5c78e0ce30e7ca51a38363375b5)
- [New] add `int32s`, `arrowFunctions`, `generatorFunctions`, `asyncFunctions`, `nonConstructorFunctions`, `notNonNegativeIntegers` [`2f8b24a`](https://github.com/ljharb/es-value-fixtures/commit/2f8b24a36bfa6a9ff7c3091bcc62240b62c97d3c)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `tape` [`22181ab`](https://github.com/ljharb/es-value-fixtures/commit/22181ab5b402011bc466c819fc72f58a2ff8504d)
- [Deps] update `has-bigints`, `object.assign` [`9ba0056`](https://github.com/ljharb/es-value-fixtures/commit/9ba0056338ac4892ec4492ad2522401a9927039f)
- [patch] expose `package.json` in `exports` [`cda9dff`](https://github.com/ljharb/es-value-fixtures/commit/cda9dff3ad41225194991a4439ea801f4ea6bfc0)
- [meta] fix FUNDING.yml [`6678bbd`](https://github.com/ljharb/es-value-fixtures/commit/6678bbd367b028929fdea8a38baf067643687849)

## v1.0.0 - 2020-10-29

### Commits

- Implementation [`b313385`](https://github.com/ljharb/es-value-fixtures/commit/b313385868effb10cabd4f400a3a9955385d5019)
- Initial commit [`c08fbbb`](https://github.com/ljharb/es-value-fixtures/commit/c08fbbb7e64e1bcb368b5b414babf042cf407c37)
- Tests [`8162bb7`](https://github.com/ljharb/es-value-fixtures/commit/8162bb7fe37d6a3a6863b414b85617ed73f9262d)
- npm init [`4916c17`](https://github.com/ljharb/es-value-fixtures/commit/4916c1766d2efb88a2a000a3e0cf8b5abb3e7832)
- [meta] add Automatic Rebase and Require Allow Edits workflows [`ea3d703`](https://github.com/ljharb/es-value-fixtures/commit/ea3d70301ca705b2625ae69b1dd759ef0b4a5fc3)
- [meta] add `auto-changelog` [`c40f765`](https://github.com/ljharb/es-value-fixtures/commit/c40f7651fc09c86aa46581cda77aa4dbc1c91a9c)
- [meta] add "funding"; create `FUNDING.yml` [`107051e`](https://github.com/ljharb/es-value-fixtures/commit/107051e687fe51301f7687a312423af766e19820)
- [Tests] add `npm run lint` [`bc646df`](https://github.com/ljharb/es-value-fixtures/commit/bc646df03f1b877a38a181c08d81d58abc928723)
- Only apps should have lockfiles [`90edefc`](https://github.com/ljharb/es-value-fixtures/commit/90edefc179f9b09d881b1f5c36fffe78e019f414)
