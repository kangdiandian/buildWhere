# buildWhere
buildWhere 根据参数创建sql
```
  npm install buildwhere --save-dev
```
```
  yarn add buildwhere --dev
```

```javascript
  const params = { id: '123', user_name: 'admin' };
  const whereArr = [
    {
      param: 'id',
      isLike: false,
    },
    {
      param: 'user_name',
      isLike: false,
      likeRule: 'all',
    },
  ];
  title = buildWhere('user', params, whereArr);
  // title = 'user."id"=123' AND user."user_name" LIKE '%admin%'
```
