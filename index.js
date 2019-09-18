/**
 * 创建where sql
 *
 * @param {*} table // 表名
 * @param {*} params // 请求参数
 * @param {*} [whereArr=[]] // 需要拼接的参数
 * @returns String
 */
function buildWhere(table, params, whereArr = []) {
  let sqlArr = [];
  whereArr.forEach(item => {
    if (item.param in params) {
      if (item.isLike) {
        switch (item.likeRule) {
          case 'all':
            sqlArr.push(
              ` ${table}."${item.param}" LIKE '%${params[item.param]}%' `
            );
            break;
          case 'left':
            sqlArr.push(
              ` ${table}."${item.param}" LIKE '%${params[item.param]}' `
            );
            break;
          case 'right':
            sqlArr.push(
              ` ${table}."${item.param}" LIKE '${params[item.param]}%' `
            );
            break;
        }
      } else {
        sqlArr.push(` ${table}."${item.param}"=${params[item.param]} `);
      }
    }
  });
  return sqlArr.join('AND');
}
module.exports = buildWhere;
