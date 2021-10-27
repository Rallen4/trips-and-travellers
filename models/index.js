const Traveller = require("./Traveller");
const Trip = require("./Trip");
const Location = require("./Location");

Traveller.hasMany(Trip,{
    onDelete:"CASCADE"
});
Trip.belongsTo(Traveller);

Location.hasMany(Trip,{
    onDelete: "CASCADE"
});

module.exports={
    Traveller,
    Trip,
    Location
};