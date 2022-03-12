const numChs = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])

let buf = null
let pos = 0

function parse(obj) { // 포인터를 두고 하나씩 읽기
  buf = obj
  pos = 0
  return json()
}

function json() {
  let result = null
  switch (buf[pos]) {
    case '{':
      pos++
      if (buf[pos] === "}") { // 빈 객체 처리
        pos++
        return {}
      }
      result = {}
      while (1) {
        const key = json() // 키 분리, buf[pos]는 "이 될 것이므로 문자열 파싱결과가 반환됨
        pos++
        result[key] = json() // 값 분리, 재귀적으로 파싱
        if (buf[pos] === ',') {
          pos++
          continue
        }
        if (buf[pos] === '}') {
          pos++
          return result
        }
      }
    case '[':
      pos++
      if (buf[pos] === ']') {
        pos++
        return []
      }
      result = [json()] // Array의 내부 데이터 형식은 재귀적으로 파싱
      while (buf[pos] === ',') {
        pos++
        result.push(json())
      }
      if (buf[pos] === ']') {
        pos++
        return result
      }
    case '"':
      result = ''
      pos++
      while (1) {
        if (buf[pos] === '"') { // 문자의 끝 처리
          pos++
          return result
        }
        result += buf[pos]
        pos++
      }

    default:
      // [0-9], -, Infinity, NaN 으로 시작하는 경우 핸들링
      if (numChs.has(buf[pos]) || buf[pos] === '-' || buf[pos] === 'I' || buf[pos] === 'N') {
        if (buf[pos] === 'N' && buf.slice(pos, pos + 3) === 'NaN') { // NaN (음수 없음)
          pos += 3
          return NaN
        }

        result = ''
        let isNeg = false
        if (buf[pos] === "-") {
          isNeg = true
          pos++
        }
        if (buf[pos] === 'I' && buf.slice(pos, pos + 8) === 'Infinity') {
          pos += 8
          return isNeg ? -Infinity : Infinity
        }
        while (numChs.has(buf[pos])) { // 정수부 처리
          result += buf[pos]
          pos++
        }
        if (buf[pos] === ".") { // 실수부 처리
          result += ".";
          pos++
          while (numChs.has(buf[pos])) {
            result += buf[pos]
            pos++
          }
        }
        return isNeg ? +result : -result // +string, -string -> +number, -number
      }
      else if (buf[pos] === 't' && buf.slice(pos, pos + 4) === 'true') {
        pos += 4
        return true
      }
      else if (buf[pos] === 'f' && buf.slice(pos, pos + 5) === 'false') {
        pos += 4
        return false
      }
      else if (buf[pos] === 'n' && buf.slice(pos, pos + 4) === 'null') {
        pos += 4
        return null
      }
  }
}

const obj = [
  {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters":
    {
      "batter":
        [
          { "id": "1001", "type": "Regular" },
          { "id": "1002", "type": "Chocolate" },
          { "id": "1003", "type": "Blueberry" },
          { "id": "1004", "type": "Devil's Food" }
        ]
    },
    "topping":
      [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5005", "type": "Sugar" },
        { "id": "5007", "type": "Powdered Sugar" },
        { "id": "5006", "type": "Chocolate with Sprinkles" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" }
      ]
  },
  {
    "id": "0002",
    "type": "donut",
    "name": "Raised",
    "ppu": 0.55,
    "batters":
    {
      "batter":
        [
          { "id": "1001", "type": "Regular" }
        ]
    },
    "topping":
      [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5005", "type": "Sugar" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" }
      ]
  },
  {
    "id": "0003",
    "type": "donut",
    "name": "Old Fashioned",
    "ppu": 0.55,
    "batters":
    {
      "batter":
        [
          { "id": "1001", "type": "Regular" },
          { "id": "1002", "type": "Chocolate" }
        ]
    },
    "topping":
      [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" }
      ]
  }
]

console.log(parse(JSON.stringify(obj)))