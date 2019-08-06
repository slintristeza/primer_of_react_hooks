const primeMemo: { [n: number]: number } = {}

const memories = (cb: any, n: number) => {
  if (!(n in primeMemo)) {
    console.log(`invoke callback with ${n}`)
    primeMemo[n] = cb(n)
  }

  return primeMemo[n]
}

const isPrime = (num: number) => {
  return memories((n: number) => {
    if (n === 1 || n=== 2) {
      return true
    }
    if (n % 2 === 0) {
      return false
    }
    for ( let i =3; i < Math.sqrt(n); i++) {
      if (!isPrime(i)) {
        continue
      }
      if (n % i === 0) {
        return false
      }
    }
    return true
  }, num)
}

const getNextPrime = (n: number) => {
  n++
  while (!isPrime(n)) {
    n++
  }
  return n
}

console.time('getNextPrime')
console.log(getNextPrime(Number.parseInt(process.argv[2])))
console.timeEnd('getNextPrime')

export default isPrime;
