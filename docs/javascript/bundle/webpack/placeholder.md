# 文件名称占位符

使用入口名称
```javascript
filename:'[name].js'
```
使用内部 chunk id
```javascript
filename:'[id].js'
```
使用构建过程中，唯一hash，并指定hash长度
```javascript
filename:'[hash:8].js'
```
基于每个chunk内容的hash
```javascript
filename:'[chunkhash].js'
```
文件扩展类型
```javascript
filename:'[ext].js'
```
