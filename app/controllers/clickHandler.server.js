'use strict';

function clickHandler(db) {
  let clicks = db.collection('clicks');

  this.getClicks = function(req, res) {
    let clickProjection = {'_id': false};

    clicks.findOne({}, clickProjection, function(err, result) {
      if(err) {
        throw err;
      }
      if(result) {
        res.json(result);
      } else {
        clicks.insert({'clicks': 0}, function(err) {
          if(err) {
            throw err;
          }

          clicks.findOne({}, clickProjection, function(err, doc) {
            if(err) {
              throw err;
            }
            res.json(result);
          });
        });
      }
    });
  };
}

module.exports = clickHandler;