### 什么是 Cursor Rules

- Cursor 内置了一个 .cursorrules 文件（或者直接在设置里写 rules）。Cursor Rules 有两种类型：全局规则（User Rules）、项目规则（Project Rules），全局适用于所有项目，项目则只对指定的生效
- 本质上就是一组“开发规范/约束提示”，告诉 AI 在帮你写代码、生成文件时要遵守的规则。
- 类似于你在写 prompt，但它是持久的，全局生效。

### 为什么需要它

开发过程中经常遇到：

- 代码风格不一致（缩进、命名、注释习惯）。

- 技术栈有约束（只能用 React18，不能用 React19 新特性；只能用 fetch，不允许 axios）。

- 项目结构固定（组件必须放在 /components 目录；API 请求要封装到 api.ts）。

- 安全或团队规范（不能上传敏感信息、要遵守 ESLint 规则）。

如果没有规则，AI 可能会：

- 给你生成团队不接受的写法。

- 写出跑不通或风格不统一的代码。

- 推荐你不允许的依赖或库。

### 怎么使用

在`cursor`打开一个项目，点击设置，选择`Rules&Memories`，划到`User Rules`

[Cursor 在前端需求开发工作流中的应用｜得物技术所有事都有吃力不讨好的部分，随着 Cursor 等 AI 工具在工程 - 掘金](https://juejin.cn/post/7490425439758254095?searchId=20251001133712F4C19B36E65A2F816EC6)
