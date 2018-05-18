---
title: babel的使用
categories:
  - frontend
tags:
  - babel
date: 2018-05-15 09:32:44
---

Babel是一个编译器，用于编写下一代Javascript

<!--more-->

## Babel相关的几个包

### babel-core

babel-core是babel的核心包, 提供 `code`, `AST` 之间的转换能力。

1. 引入
```js
import babel from 'babel-core';
```

2. 转换 `code`
```js
const result = babel.transform(code, options);
console.dir(result); // {code, map, AST}
```

3. 转换 `file`
```js
 // 异步
babel.transformFile(filename, options, function (err, result) {
    console.dir(result); // {code, map, AST}
});

// 同步
const result = babel.transformFileSync(filename, options);
console.dir(result); // {code, map, AST}
```

4. 转换 `AST`
```js
const result = babel.transformFromAst(ast, code, options);
console.dir(result); // {code, map, AST}
```

以下为 babel 的几个转换方法中的入参和返回值
- 参数: code 字符串，代码片段
- 参数: filename 字符串，文件名称，可以理解为字符流
- 参数: AST 对象，抽象语法树
- 参数: options 对象，可配置的转换参数
- 返回: result 对象，通常有 code AST map 三个属性，分别对应 转换后的代码片段 转换后的抽象语法树 和 转换前后的映射关系

### babel-cli

babel-cli 将 babel-core 封装为一个命令行程序，给开发者提供在命令行中使用babel的能力。

如下为在命令行中使用babel的示例：

```sh
// 编译文件
babel script.js --out-file script-compiled.js

// 编译目录
babel src --out-dir lib

// 简单选项：监视 映射文件 忽略文件 复制文件 忽略babelrc
babel src --out-dir lib --watch --source-maps --ignore a.js,b.js --copy-files --no-babelrc

// 配置选项: 配置插件...
babel src --out-dir lib --plugins=transform-runtime,transform-es2015-modules-amd
babel src --out-dir lib --presets=env
babel src --out-dir lin --name=value
```

当配置项比较多的时候，每次执行命令时拼接大量的参数显然是不明智的，这时候我们可以将配置项放入 .babelrc 文件或者 package.json 文件中，babel 命令会自动读取文件中的信息。

如下为一个 .babelrc 文件的示例:
```js
{
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {browsers: ['ie >= 9']},
        modules: false
      }
    ]
  ],
  plugins: []
}
```

如下为一个 package.json 文件的示例:
```js
{
  name: 'my-package',
  version: '1.0.0',
  babel: {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {browsers: ['ie >= 9']},
          modules: false
        }
      ]
    ],
    plugins: []
  }
}
```


### babel-loader

babel-loader 将 babel-core 封装为一个webpack加载器，给开发者提供在webpack中使用babel的能力。

如下为在webpack中使用babel的配置示例：

```js
module : {
  rules: [
    {
      test: /\.js$/,
      exclude: 'node_modules',
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {browsers: ['ie >= 9']},
                modules: false
              }
            ]
          ],
          plugins: []
        }
      }
    }
  ]
}
```

### babel-preset-env

babel-preset-env 是一个 babel 插件集，供开发者快速选择所需编译能力。

可供选择的选项：

- targets 所需支持的运行环境，可通过 browsers 属性（利用 [browserslist](https://github.com/ai/browserslist) 规则）选择编译后所需兼容的浏览器
- modules 将 esm 转换为另一种模块类型，如：amd umd systemjs commonjs false 等。默认为 commonjs；false 为不转换。
- include 白名单数组
- exclude 黑名单数组



### babel-polyfill

语言的更新换代伴随着两个类型的优化：一个是语法的优化，一个是能力的补充。

对于语法优化方面，通过AST变换可以将新旧版本对应起来；然而，新旧版本之间的能力往往是不对等的，比如新版本中一些新增的类或者属性，在旧版本中不支持。此时就需要引入一些额外的代码的打补丁。

babel-polyfill 解决的问题就是补全旧版本缺失的部分，提供一个和新版本一样的编码环境。

引入方式：
```js
// 页面js入口处
import 'babel-polyfill'

// webpack中
module.exports = {
  entry: ['babel-polyfill', './app.js']
}

// html中
<script src='./dist/polyfill.js'></script>
```

## babel编译过程的理解

如果不配置插件，编译文件和源文件没有任何变化

![](/blog/images/use-of-babel/1.png)

配置 babel-preset-env 插件集合时，源文件按照默认模块化方案 commonjs 被编译到当前主流浏览器可识别的版本

![](/blog/images/use-of-babel/4.png)

配置 babel-preset-env 插件集合，禁用模块化方案时，源文件按照当前模块化方案被编译到当前主流浏览器可识别的版本

![](/blog/images/use-of-babel/2.png)

配置 babel-preset-env 插件集合，并设置模块化方案为 umd ，源文件按照设置的模块化方案被编译到当前主流浏览器可识别的版本

![](/blog/images/use-of-babel/3.png)


## 总结

babel的使用有 命令行，webpack集成，node脚本 等多种形式；其中命令行形式主要应用于编写组件或库，webpack集成形式主要应用于编写前端业务逻辑代码，node脚本形式没有用过暂不讨论。

babel的配置有 webpack, npm, .babelrc 等方式，具体可根据使用形式确定。

目前，babel 的配置方案一般是采用 babel-preset-env 插件集合，如果需要兼容老旧代码，最好还是禁用模块化方案，因为不禁用的话会在每个模块的开头加入严格模式声明，这可能导致页面报错。
