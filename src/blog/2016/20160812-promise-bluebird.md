# Promise 学习小结——bluebird
***

#### 1、Promise.all([ ])
该方法接受一个数组或者promise的数组，各个promise resolve之后，总的promise才resove，resole的值为各promiseresolve值得数组。
如果任一个promise reject。总promise即catch reject的值。

**语法**
```
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.reject(3);

//[1, 2]
Promise.all([p1, p2])
.then(result => console.log(reslult))
.catch(err => console.log(err));

//3
Promise.all([p3, p1, p2])
.then(result => console.log(reslult))
.catch(err => console
```

#### 2、Promise.props({})
该方法接受一个object，各个promise resolve之后，总的promise才resove，resole的值为各promiseresolve值得数组。
如果任一个promise reject。总promise即catch reject的值。
>与all一样，只是接受对象做参数
**语法**
```
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.reject(3);

//{p1:1, p2:2}
Promise.props({
    p1: p1,
    p2: p2
})
.then(result => console.log(reslult))
.catch(err => console.log(err));

//3
Promise.props({
p3: p3, 
p1: p1, 
p2: p2])
.then(result => console.log(reslult))
.catch(err => console.log(err);
```

