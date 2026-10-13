import {expect, test} from 'bun:test'

const {default: jaidMe} = await import('#src/main.ts')
test('should run', () => {
  const result = jaidMe()
  expect(result).toBe('jaid.me') // TODO Test actual functionality
})
