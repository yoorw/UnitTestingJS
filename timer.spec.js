const countdown = require('./timer.js');

jest.useFakeTimers();   // <= This mocks out any call to setTimeout, setInterval with dummy functions 

describe('timer suite', function() {
    // test('Should call the done callback wehn the timer has finished counting', function(done) {
    //     const progressCallbackSpy = jest.fn();
    //     const doneCallbackSpy = jest.fn(function() {
    //         expect(progressCallbackSpy.mock.calls.length).toBe(1);  // <= How many times it was called
    //         const firstCall = progressCallbackSpy.mock.calls[0];
    //         const firstCallArg = firstCall[0];
    //         expect(firstCallArg).toBe(1);
    //         // console.log('Done spy invoked');
    //         done();
    //     });
    //     countdown(1, progressCallbackSpy, doneCallbackSpy);   
    //     done();

    //     // countdown(1, function(currentTime) {
    //     //     console.log('Progress callback invoked with time ' + currentTime);
    //     // }, function() {
    //     //     console.log('Done callback invoked');
    //     // });
    // });

    // test('Should call the done callback when the timer has finished counting and the countdown is 4 secs', function(done) {
    //     const progressCallbackSpy = jest.fn();
    //     const doneCallbackSpy = jest.fn(function() {
    //         expect(progressCallbackSpy.mock.calls.length).toBe(4);
    //         done();
    //     });

    //     countdown(4, progressCallbackSpy, doneCallbackSpy);
    // });

    test('Should call the done callback when the timer has finished counting Pt2', function() {
        const progressCallbackSpy = jest.fn();
        const doneCallbackSpy = jest.fn();
        countdown(1, progressCallbackSpy, doneCallbackSpy);

        jest.runTimersToTime(1000); // <= Move the time ahed with 1 second 

        expect(progressCallbackSpy.mock.calls.length).toBe(1);
        const firstCall = progressCallbackSpy.mock.calls[0];
        const firstCallArg = firstCall[0];
        expect(firstCallArg).toBe(1);
    });

    test('Should call the done callback when the timer has finished counting and the countdown is 4 secs Pt2', function() {
        const progressCallbackSpy = jest.fn();
        const doneCallbackSpy = jest.fn();

        countdown(4, progressCallbackSpy, doneCallbackSpy);

        jest.runTimersToTime(4000); // <= Move the time ahead with 4 seconds 

        expect(progressCallbackSpy.mock.calls.length).toBe(4);
    });

});