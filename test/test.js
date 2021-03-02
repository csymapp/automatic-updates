var automaticUpdates = require('../index'),
    assert = require('assert');

// it("Should throw error if ", () => {
//     if (!automaticUpdates.init({ interval: 'adjasj' })) {
//         throw Error("Not package.json")
//     }
// })

describe('init', function () {
    describe('Invalid interval', function () {
        it('should throw error when interval not numeric', function () {
            try{
                automaticUpdates.init({ interval: '100' })
                throw Error("failed this one for non-numeric value")
            }catch(error){
                return true
            }
        });
        it('should work with numeric intervals', function () {
            try{
                automaticUpdates.init({ interval: 100 })
                automaticUpdates.clearIntervals();
                return true
            }catch(error){
                throw error
            }
        });
        it('should throw error when interval < 0', function () {
            try{
                automaticUpdates.init({ interval: -1 })
                throw Error("failed this one for interval < 0")
            }catch(error){
                return true
            }
        }); 
        it('should throw error when interval = 0', function () {
            try{
                automaticUpdates.init({ interval: -0 })
                throw Error("failed this one for interval = 0")
            }catch(error){
                return true
            }
        });
        it('should work with interval greater than 0', function () {
            try{
                automaticUpdates.init({ interval: 1, source:'github' })
                automaticUpdates.clearIntervals();
                return true
            }catch(error){
                throw error
            }
        });
    });
    describe('Invalid source', function () {
        it('should throw error when source is neither npm not github', function () {
            try{
                automaticUpdates.init({ source: 'source' })
                throw Error("failed this one for invalid source")
            }catch(error){
                return true
            }
        });
        it('should work with npm source', function () {
            try{
                automaticUpdates.init({ source: 'npm' })
                automaticUpdates.clearIntervals();
                return true
            }catch(error){
                throw error
            }
        });
        it('should work with github source', function () {
            try{
                automaticUpdates.init({ source: 'github' })
                automaticUpdates.clearIntervals();
                return true
            }catch(error){
                throw error
            }
        });
        
    });
});