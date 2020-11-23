
module.exports = {


  friendlyName: 'Destroy one thing',


  description: 'Delete the "thing" with the specified ID from the database',


  inputs: {
    id: {
      type: 'number',
      required:  true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    await Thing.destroy({id: inputs.id});
    // All done.
    return exits.success();

  }


};
