module.exports = (app) => {
    require('./produkter')(app);
    require('./kontakt')(app);
    require('./users')(app);
    require('./login')(app);
};