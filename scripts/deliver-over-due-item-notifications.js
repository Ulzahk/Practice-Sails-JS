module.exports = {


  friendlyName: 'Deliver over due item notifications',


  description: '',


  fn: async function () {

    var overdueThings = await Thing.find({
      borrowedBy:  {'!==': null},
      expectedReturnAt: { '<=': Date.now() - 1000*60*60*12}
    });
    for(let overdueThing of overdueThings){
      // TODO email info
    }

    sails.log('Running custom shell script... (`sails run deliver-over-due-item-notifications`)');

  }


};

