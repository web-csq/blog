## javascript 数据类型
::: tip
编写时，参照《JavaScript权威指南》第三章：类型，值和变量。划分数据类型
:::

### 基本类型

- **[字符串（String）](./string.md)，由多个字符组成的序列**

- **[数值（Number）](./number.md)，可分为整型（int）和浮点型（float）**

- **未定义（undefined），变量声明未赋值**

```javascript
    let a;
    console.log(a); //undefined

    console.log(b); //undefined
    var b=1;
```

- **空（null），值为空**

- **布尔（Boolean），有两个值：真（true）/假（false）**

### 对象类型

- **[数组（Array）](./array.md)，由数组对象用来在单独的变量名中存储一系列的值。**

- **[函数（Function）](./function.md)，被设计为执行特定任务的代码块，在调用时执行**
  
- **[对象（Object）](./object.md)，存储键（key）值（value）对的容器**

### 全局对象

1. 全局属性 Infinity,NAN等
2. 全局函数 isNAN(),parseInt(),parseFloat()等
3. 构造函数 Date(),RegExp(),Object(),Array()等
4. 全局对象Math,JSon等


### 包装类型

```javascript
let a=1
a.name="a"
console.log(a.name) //undefined

```
  