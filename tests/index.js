var test = require('tape'),
    crel = require('crel'),
    doc = require('doc-js'),
    outerDimensions = require('../');

var element1 = crel('div', {
        'class': 'element one',
        'style': 'width: 50px; height: 70px; background: olivedrab;'
    }),
    element2 = crel('div', {
        'class': 'element two',
        'style': 'width: 150px; height: 250px; margin-top: 10px; margin-bottom: 15px; background: orangered;'
    });

doc.ready(function(){
    crel(document.body,
        element1,
        element2
    );

    test('returns undefined if no element passed', function(t){
        t.plan(1);

        t.ok(outerDimensions() === undefined, 'returns undefined');
    });

    test('element1', function(t){
        t.plan(1);

        var dimensions = outerDimensions(element1),
            expectedDimensions = {
                width: 50,
                height: 70
            };

        t.deepEqual(dimensions, expectedDimensions, 'Got correct dimensions');
    });

    test('element2', function(t){
        t.plan(1);

        var dimensions = outerDimensions(element2),
            expectedDimensions = {
                width: 150,
                height: 275
            };

        t.deepEqual(dimensions, expectedDimensions, 'Got correct dimensions');
    });
});