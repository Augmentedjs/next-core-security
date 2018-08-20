describe("Given Augmented Security Factory", () => {
	let client = null;

	afterEach(() => {
		client = null;
	});

	it("is defined", () => {
		expect(Security.AuthenticationFactory).to.not.be.undefined;
	});

	it("can return an OAUTH2 Client", () => {
		client = Security.AuthenticationFactory.getSecurityClient(Security.ClientType.OAUTH2);
		expect(client.type).to.equal(Security.ClientType.OAUTH2);
	});

	it("can return an ACL Client", () => {
		client = Security.AuthenticationFactory.getSecurityClient(Security.ClientType.ACL);
		expect(client.type).to.equal(Security.ClientType.ACL);
	});

	it("does not return a Fake Client", () => {
		client = Security.AuthenticationFactory.getSecurityClient("fake");
		expect(client).to.equal(null);
	});
});
