const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
	const API_PRODUCT_SRV = await cds.connect.to('API_PRODUCT_SRV');
	this.on('READ', "A_Product", async (req, rej) => {
		return API_PRODUCT_SRV.run(req.query);
	});
});