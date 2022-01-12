# karma-learn
karma学习代码笔记

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/agile-contrib/karma-learn/issues)，欢迎参与维护！

## jasmine

Karma是一个基于Node.js的JavaScript测试执行过程管理工具（Test Runner），本例子中选择的具体单元测试框架是jasmine。

### Matcher

任何 Matcher 都能通过在 expect 调用 Matcher 前加上 not 来实现一个否定的断言

```js
（expect(a).not.toBe(false);）
```

- not 表示对下面断言的否定

- toBe() 判断两个变量是否全等，类似于“===”；

- toNotBe() 与上一个相反，判断两个变量是否不全等，类似于“!==”；

- toEqual() 判断变量是否相等，相当于“==”；

- toNotEqual() 判断变量是否相等，相当于“!=”；

- toThrow() 检验一个函数是否会抛出一个错误。

- toBeDefined() 检查变量或属性是否已声明且赋值（是否不等于 undefined）；

- toBeUndefined() 检查变量或属性是否已声明且赋值（是否等于 undefined）；

- toBeNull() 判断变量是否为 null；

- toBeTruthy() 判断变量如果转换为布尔值，是否为 true；

- toBeFalsy() 判断变量如果转换为布尔值，是否为 false；

- toBeLessThan() 与数值比较，是否小于；

- toBeGreaterThan() 与数值比较，是否大于；

- toContain() 判断一个数组中是否包含元素（值）。只能用于数组，不能用于对象；

- toBeCloseTo() 数值比较时定义精度，先四舍五入后再比较；

- toMatch() 按正则表达式匹配；

- toNotMatch() 不按正则表达式匹配；

- toThrow()：检验一个函数是否会抛出一个错误

一个新建的 Object 不是（not to be）另一个新建的 Object，但是它们是相等（to equal）的：

```js
expect({}).not.toBe({});
expect({}).toEqual({});
```

expect() 断言，传递一个参数，接收实际值，后面紧跟着一个 Matchers()，来进行判断是否通过：

```js
describe("测试集描述", function () {
    it("测试体描述",function(){
        var a=true;
        expect(a).toEqual(true);
    })
})
```

### 四个全局函数

- beforeEach() 在 describe 函数中每个 Spec(it)执行之前执行。

- afterEach() 在 describe 函数中每个 Spec(it)数执行之后执行。

- beforeAll() 在 describe 函数中所有的 Spec(it)执行之前执行，但只执行一次，在 Sepc 之间并不会被执行。

- afterAll() 在 describe 函数中所有的 Spec(it)执行之后执行，但只执行一次，在 Sepc 之间并不会被执行。

开源协议
---------------------------------------
[MIT](https://github.com/agile-contrib/karma-learn/blob/master/LICENSE)

Copyright (c) 2022 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
