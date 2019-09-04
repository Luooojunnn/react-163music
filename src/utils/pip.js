// 管道类封装

// 数字转缩写
function num2Abbreviation(num){
  return (num/10000).toFixed(1)+'万'
}

// 毫秒转日月
function m2day(m){
  let d = new Date(m)
  let mon = d.getMonth()+1 > 9 ? d.getMonth()+1:`0${d.getMonth()+1}`
  let day = d.getDate() > 9 ? d.getDate(): `0${d.getDate()}`
  return `${mon}月${day}日`
}

export {
  num2Abbreviation,
  m2day
}