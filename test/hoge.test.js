define(['../src/hoge'], function(hoge) {
    describe('hoge', function() {
        describe('#add', function() {
            it('1 + 2 should be 3', function() {
                expect(hoge.add(1, 2)).to.be.equal(3);
            });
            it('1 + 2 + 3 should be 6', function() {
                expect(hoge.add(1, 2, 3)).to.be.equal(6);
            });
        });
    });
});
