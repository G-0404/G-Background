### loadEnv的使用

```javascript
import { loadEnv } from 'vite'
```

loadEnv 函数用于加载环境变量。在 Vite 项目中，可以使用环境变量来配置不同的运行时行为和参数。通过调用 loadEnv 函数，可以将环境变量加载到项目中，并使其在构建或开发过程中生效。

### defineConfig的使用

```javascript
import { defineConfig } from 'vite'
```

这里是我想岔了，以下两种形式其实都是为了获得类型提示,代码中用了法一，那就用法一

```javascript
export default ({ command, mode }: ConfigEnv): UserConfig => { ... }
```

```javascript
export default ({ command, mode }: ConfigEnv): UserConfig => {
  if (command === 'serve') {
    // 开发模式的配置
  } else {
    // 构建模式的配置
  }
  return {
    // 公共配置
  };
};
```

```javascript
import { defineConfig } from 'vite'

export default defineConfig({
  // 配置对象
})
```

> 详细说明文档
>
> https://blog.csdn.net/weixin_46769087/article/details/127842108

### resolve 的使用

首先引入位置在第一行

```javascript
import { resolve } from 'path'
```

#### 补充：process.cwd()

process.cwd() 这是一个Node.js的全局对象`process`的方法，返回Node.js进程的当前工作目录。这意味着无论你的Node.js应用程序在哪里启动，`root` 都指向那个目录

#### 使用以及案例

```javascript
const root = process.cwd()

function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}
```

如果你调用 `pathResolve` 函数并传递 `'src/assets/svgs'` 作为参数，它将返回以当前工作目录为基础的 `'src/assets/svgs'` 目录的完整路径。假设你的当前工作目录是 `/Users/yourname/projects/myapp`（这是通过调用 `process.cwd()` 获得的），那么函数调用将返回：

```javascript
const resolvedPath = pathResolve('src/assets/svgs')
console.log(resolvedPath)
```

输出将会是： `/Users/yourname/projects/myapp/src/assets/svgs`

这是因为 `pathResolve` 函数内部调用了 `resolve` 方法，它会将传递的路径片段与当前工作目录连接起来，生成一个绝对路径。

### 类型推断

```javascript
import type { UserConfig, ConfigEnv } from 'vite'
```

这俩其实就是俩类型
