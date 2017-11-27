'use strict';

require(process.cwd() + '/app/model/job.js');

function clickHandler(db) {
  let clicks = db.model('ClickCounter', 'ClickCountModel', 'clickCount');

  this.getClicks = function(req, res) {
    clicks.find({}, function(err, result) {
      if(err) {
        throw err;
      } if(result) {
        res.json(result);
      } else {
        clicks.insert({'count': 0}, function(err) {
          if(err) {
            throw err;
          }

          clicks.find({}, clickProjection, function(err, doc) {
            if(err) {
              throw err;
            }
            res.json(result);
          });
        });
      }
    });
  };

  this.addClick = function(req, res) {
    clicks.findAndModify({}, {'_id':1}, {$inc:{'clicks':1}}, function(err, result) {
      if(err) {throw err;}
      res.json(result);
    });
  };

  this.resetClicks = function(req, res) {
    clicks.update({}, {'clicks':0}, function(err, result) {
      if(err) {throw err;}
      res.json(result);
    });
  };
}

module.exports = clickHandler;
