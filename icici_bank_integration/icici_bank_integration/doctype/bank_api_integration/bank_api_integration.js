// Copyright (c) 2021, Aerele and contributors
// For license information, please see license.txt

frappe.ui.form.on('Bank API Integration', {
	refresh:function(frm){
		 frm.add_custom_button(__('Registration Status'), () =>{
		 	frappe.call({
			method: 'icici_bank_integration.icici_bank_integration.doctype.bank_api_integration.bank_api_integration.check_registration_status',
			args: {
				"bank_account":frm.doc.bank_account
				},
				freeze: true,
				callback: function(r) {
					console.log(r.message.success)
					frappe.msgprint(r.message.errormessage)
				}
			});
		 });
		  frm.add_custom_button(__('Generate Statement'), () =>{
		 	frappe.call({
			method: 'icici_bank_integration.icici_bank_integration.doctype.bank_api_integration.bank_api_integration.fetch_account_statement',
			args: {
				"bank_account":frm.doc.bank_account
				},
				freeze: true,
				callback: function(r) {
					frappe.msgprint("Statement successfully generated.")
				}
			});
		 });
		  frm.add_custom_button(__('Fetch Balance'), () =>{
		 	frappe.call({
			method: 'icici_bank_integration.icici_bank_integration.doctype.bank_api_integration.bank_api_integration.fetch_balance',
			args: {
				"bank_account":frm.doc.bank_account
				},
				freeze: true,
				callback: function(r) {
					frappe.msgprint("Statement successfully generated.")
				}
			});
		 });

	},
	onload: function(frm) {
        frm.set_query("bank_account", function() {
			return {
				"filters":{
					"is_company_account": 1
				},
			};
		});}
});
