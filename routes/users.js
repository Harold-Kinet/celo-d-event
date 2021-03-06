var express = require("express");
var router = express.Router();

const ContractKit = require("@celo/contractkit");
//const HelloWorld = require("../build/contracts/HelloWorld.json");


router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const kit = ContractKit.newKit("https://alfajores-forno.celo-testnet.org");
var Web3 = require("web3");
web3 = new Web3(
  new Web3.providers.HttpProvider("https://alfajores-forno.celo-testnet.org")
);
var dep = new kit.web3.eth.Contract(
[
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ListeUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "ID_User",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "country",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "posta_Code",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "privateKey",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "userWallet",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "NumberTickettUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID_User",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "indice",
				"type": "uint256"
			}
		],
		"name": "getproject",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "rulesIndice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_Companyname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Companyemail",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_Identification",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_CompanyAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_CompanyArea",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_CompanyBankAccount",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_ProWallet",
				"type": "address"
			}
		],
		"name": "addProUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID_Project",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "indice",
				"type": "uint256"
			}
		],
		"name": "getTicketProject",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_project",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "organizer",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tickets_sale_rev",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "total_tickets_sale_rev",
				"type": "uint256"
			}
		],
		"name": "CreateRules",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_project",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "indice",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_user",
				"type": "uint256"
			}
		],
		"name": "RevenuePerCoOr",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ListeProjectUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id_project",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "project_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "project_type",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "localization",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "start_date",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "end_date",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "ongoing_project",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "project_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "project_contact_information",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "tickets_total_supply",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID_User",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_project",
				"type": "uint256"
			}
		],
		"name": "ConfirmeParticipation",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID_User",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_project",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Por_distribution",
				"type": "uint256"
			}
		],
		"name": "participation",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ProjectIndice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID_User",
				"type": "uint256"
			}
		],
		"name": "nbrProjectUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ListIDRules",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID_User",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "indice",
				"type": "uint256"
			}
		],
		"name": "getTicketUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_project",
				"type": "uint256"
			}
		],
		"name": "getLengthPart",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_project",
				"type": "uint256"
			}
		],
		"name": "getRules",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ListIDProUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ID_ProUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ID_UserIndice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "Username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "country",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "posta_Code",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "userWallet",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "privateKey",
				"type": "string"
			}
		],
		"name": "CreateUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "NumberTicketsProjects",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID_User",
				"type": "uint256"
			}
		],
		"name": "getUser",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID_User",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "project_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "project_type",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "localization",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "start_date",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "end_date",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "ongoing_project",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "project_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "project_contact_information",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "tickets_total_supply",
				"type": "uint256"
			}
		],
		"name": "CreateProject",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ListeUserTicket",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "ID_Ticket",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "TicketName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "TicketPrice",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "TicketDescription",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "validity",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ticketCreator",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ticketOwner",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "options",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ID_Ticket",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ListProUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "ID_ProUser",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Companyname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Companyemail",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Identification",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "CompanyAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "CompanyArea",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "CompanyBankAccount",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "ProWallet",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ListeRules",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id_rules",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "organizer",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tickets_sale_rev",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "total_tickets_sale_rev",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ListeIDUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_project",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "indice",
				"type": "uint256"
			}
		],
		"name": "getCoOrganizateur",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID_UserPro",
				"type": "uint256"
			}
		],
		"name": "getUserPro",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "NumberProjectUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID_Project",
				"type": "uint256"
			}
		],
		"name": "nbrTicketProject",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ID_User",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_ID_Project",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_TicketName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_TicketPrice",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_TicketDescription",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_validity",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_ticketCreator",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_ticketOwner",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_options",
				"type": "string"
			}
		],
		"name": "addTicket",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_project",
				"type": "uint256"
			}
		],
		"name": "getParticipantByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ListTicketProject",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "ID_Ticket",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "TicketName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "TicketPrice",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "TicketDescription",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "validity",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ticketCreator",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ticketOwner",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "options",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID_User",
				"type": "uint256"
			}
		],
		"name": "nbrTicketUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
],
  "0xC60ac7EF24f85BcE4032D609FC02667880bC08E7"
);

const getAccount = require("../getAccount").getAccount;

/* GET users listing. */
router.post("/CreateUser", async function (req, res, next) {
  let account = await getAccount();

  kit.addAccount(account.privateKey);
console.log(account.address)
  const d = await dep.methods.CreateUser(
    req.body.Username,
    req.body.email,
    req.body.country,
    req.body.posta_Code,
    // req.body.preferences,
    req.body.userWallet,
    req.body.privateKey
  );
  const tx = await kit.sendTransactionObject(d, {
    from: account.address,
  });

  const receipt = await tx.waitReceipt();

  res.send(receipt);
});

router.get("/getUser", async function (req, res, next) {
  dep.methods.getUser(req.query.ID_User).call(function (error, result) {
    res.send(result);
  });
});
router.post("/CreateProject", async function (req, res, next) {
  let account = await getAccount();

  kit.addAccount(account.privateKey);
  const d = await dep.methods.CreateProject(
    req.body.ID_User,
    req.body.project_name,
    req.body.project_type,
    req.body.localization,
    req.body.start_date,
    req.body.end_date,
    req.body.ongoing_project,
    req.body.project_description,
    req.body.project_contact_information,
    req.body.tickets_total_supply
  );
  const tx = await kit.sendTransactionObject(d, {
    from: account.address,
  });

  const receipt = await tx.waitReceipt();

  res.send(receipt);
});
router.get("/getproject", async function (req, res, next) {
  dep.methods
    .getproject(req.query.ID_User, req.query.indice)
    .call(function (error, result) {
      res.send(result);
    });
});
router.post("/CreateRules", async function (req, res, next) {
  let account = await getAccount();

  kit.addAccount(account.privateKey);

var organizersList = req.body.OrganizersList;
console.log(organizersList)
console.log(organizersList.length)
for (let p = 0; p < organizersList.length; p++) {
  const dd = await dep.methods.participation(
    organizersList[p].ID_User,
    req.body.id_project,
    organizersList[p].Por_distribution);
 const tx = await kit.sendTransactionObject(dd, {
    from: account.address,
  });

  const receipt2 = await tx.waitReceipt();

}
  const d = await dep.methods.CreateRules(
    req.body.id_project,
    req.body.organizer,
    req.body.tickets_sale_rev,
    req.body.total_tickets_sale_rev  );
  const tx = await kit.sendTransactionObject(d, {
    from: account.address,
  });

  const receipt = await tx.waitReceipt();

  res.send(receipt);
});

router.get("/getRules", async function (req, res, next) {
  dep.methods.getRules(req.query.id_project).call(function (error, result) {
    res.send(result);
  });
});

router.post("/addProUser", async function (req, res, next) {
  let account = await getAccount();

  kit.addAccount(account.privateKey);

  const d = await dep.methods.addProUser(
    req.body.Companyname,
    req.body._Companyemail,
    req.body.Identification,
    req.body._CompanyAddress,
    req.body._CompanyArea,
    req.body._CompanyBankAccount,
    req.body._ProWallet
  );
  const tx = await kit.sendTransactionObject(d, {
    from: account.address,
  });

  const receipt = await tx.waitReceipt();

  res.send(receipt);
});

router.get("/getUserPro", async function (req, res, next) {
  dep.methods.getUserPro(req.query.ID_UserPro).call(function (error, result) {
    res.send(result);
  });
});

router.post("/addTicket", async function (req, res, next) {

  let account = await getAccount();

  dep.methods.getUser(req.body._ID_User).call(async function (error, result) {
console.log(result["5"]);
    kit.addAccount(result["5"]);


    const stabletoken = await kit.contracts.getStableToken();

    let tx2 = await stabletoken
      .transfer(account.address, req.body._TicketPrice )
      .send({ from: result["4"] });

    let receipt2 = await tx2.waitReceipt();

    console.log("Transaction receipt: %o", receipt2);

    let balance = await stabletoken.balanceOf(account.address);

    console.log(`Your new account balance: ${balance.toString()}`);
  });

  kit.addAccount(account.privateKey);

  const d = await dep.methods.addTicket(
    req.body._ID_User,
    req.body._ID_Project,
    req.body._TicketName,
    req.body._TicketPrice,
    req.body._TicketDescription,
    req.body._validity,
    req.body._ticketCreator,
    req.body._ID_User,
    req.body._options
  );
	  const tx = await kit.sendTransactionObject(d, {
    from: account.address,
  });

  const receipt = await tx.waitReceipt();

  res.send(receipt);
});

router.get("/getTicketUser", async function (req, res, next) {
  dep.methods
    .getTicketUser(req.query.ID_User, req.query.indice)
    .call(function (error, result) {
      res.send(result);
    });
});

router.get("/getTicketProject", async function (req, res, next) {
  dep.methods
    .getTicketProject(req.query.ID_Project, req.query.indice)
    .call(function (error, result) {
      res.send(result);
    });
});

router.post("/confirmParticipation", async function (req, res, next) {
  let account = await getAccount();

  kit.addAccount(account.privateKey);
  const d = await dep.methods.ConfirmeParticipation(
    req.body.ID_User,
    req.body.id_project);

  const tx = await kit.sendTransactionObject(d, {
    from: account.address,
  });

  const receipt = await tx.waitReceipt();

  res.send(receipt);
});
router.post("/revenueCoCorganizer", async function (req, res, next) {
  let account = await getAccount();

//kit.addAccount(account.privateKey);

const liste = []
await  dep.methods.RevenuePerCoOr(
    req.body.id_project,
    req.body.indice,
    req.body.id_user).call(async function (error, result1) {
      if(result1 =true)
	{ 
		await dep.methods.getLengthPart(req.body.id_project).call(async function (error, result2) {
		for(let i=0; i<=result2-1; i++)
		{   
			await dep.methods.getCoOrganizateur(
   			 req.body.id_project, i
  			  ).call(async function (error, result3) {
//	console.log(result3)
 dep.methods.getUserPro(result3["0"]).call(async function (error, result4) {
//console.log(result4)
dep.methods.getRules(req.body.id_project).call(async function (error, result5) {
if(result3["2"]= true) {  
  kit.addAccount(account.privateKey);
    const stabletoken = await kit.contracts.getStableToken();

    let tx2 = await stabletoken
      .transfer(result4["6"], (result5["3"]*result3["1"])/100 )
      .send({ from: account.address });

    let receipt2 = await tx2.waitReceipt();
console.log(receipt2)
}
});
   
  });
 liste.push(result3)
		})

		}
res.send(result2)		
//res.send(result2)
		})
	}
	else { console.log("nothing")}
    });
});
/*
router.post("/Participation", async function (req, res, next) {
  let account = await getAccount();

  kit.addAccount(account.privateKey);
  const d = await dep.methods.participation(
    req.body.ID_User,
    req.body.id_project,
    req.body.Por_distribution);

  const tx = await kit.sendTransactionObject(d, {
    from: account.address,
  });

  const receipt = await tx.waitReceipt();

  res.send(receipt);
});
*/
router.get("/balanceOf", async function (req, res, next) {
 const stabletoken = await kit.contracts.getStableToken();
   let balance = await stabletoken.balanceOf(req.query.address)
res.send(balance.toString());
    console.log(`Your new account balance: ${balance.toString()}`);

});
router.get("/getLengthOrganizer", async function (req, res, next) {
  dep.methods.getLengthPart(req.query.id_project).call(function (error, result) {
    res.send(result);
  });
});

module.exports = router;

