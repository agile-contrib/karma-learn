describe('index.js: ', function() {

    it('isNum() should work fine.', function() {
        expect(isNum(1)).toBe(true)
        expect(isNum('1')).toBe(false)
    })
})