const countdown = require('./timer.js');

describe('timer suite', function() {
    test('Should call the done callback wehn the timer has finished counting', function(done) {
        const progressCallbackSpy = jest.fn();
        const doneCallbackSpy = jest.fn(function() {
            console.log('Done spy invoked');
            done();
        });

        countdown(1, progressCallbackSpy, doneCallbackSpy);
        done();

        // countdown(1, function(currentTime) {
        //     console.log('Progress callback invoked with time ' + currentTime);
        // }, function() {
        //     console.log('Done callback invoked');
        // });
    });
});