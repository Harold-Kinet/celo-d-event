//
// Add package imports and setup here
//

// 1. Import ContractKit

// 2. Init a new kit, connected to the alfajores testnet

//
// Read Accounts
//

const ContractKit = require("@celo/contractkit");
//const HelloWorld = require("../build/contracts/HelloWorld.json");

const kit = ContractKit.newKit("https://alfajores-forno.celo-testnet.org");
var Web3 = require("web3");
web3 = new Web3(
  new Web3.providers.HttpProvider("https://alfajores-forno.celo-testnet.org")
);
var dep = new kit.web3.eth.Contract(
  [
    {
      constant: false,
      inputs: [
        {
          internalType: "string",
          name: "_Companyname",
          type: "string",
        },
        {
          internalType: "string",
          name: "_Companyemail",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_Identification",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_CompanyAddress",
          type: "string",
        },
        {
          internalType: "string",
          name: "_CompanyArea",
          type: "string",
        },
        {
          internalType: "string",
          name: "_CompanyBankAccount",
          type: "string",
        },
        {
          internalType: "address",
          name: "_ProWallet",
          type: "address",
        },
      ],
      name: "addProUser",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "_ID_User",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_ID_Project",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_TicketName",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_TicketPrice",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_TicketDescription",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_validity",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_ticketCreator",
          type: "string",
        },
        {
          internalType: "string",
          name: "_ticketOwner",
          type: "string",
        },
        {
          internalType: "string",
          name: "_options",
          type: "string",
        },
      ],
      name: "addTicket",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "ID_User",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "project_name",
          type: "string",
        },
        {
          internalType: "string",
          name: "project_type",
          type: "string",
        },
        {
          internalType: "string",
          name: "localization",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "start_date",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "end_date",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "ongoing_project",
          type: "bool",
        },
        {
          internalType: "string",
          name: "project_description",
          type: "string",
        },
        {
          internalType: "string",
          name: "project_contact_information",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "tickets_total_supply",
          type: "uint256",
        },
      ],
      name: "CreateProject",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "id_project",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "organizer",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "tickets_sale_rev",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "total_tickets_sale_rev",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "signed_or",
          type: "string",
        },
      ],
      name: "CreateRules",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "string",
          name: "Username",
          type: "string",
        },
        {
          internalType: "string",
          name: "email",
          type: "string",
        },
        {
          internalType: "string",
          name: "country",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "posta_Code",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "preferences",
          type: "string",
        },
        {
          internalType: "address",
          name: "userWallet",
          type: "address",
        },
      ],
      name: "CreateUser",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "ID_User",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "id_project",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "Por_distribution",
          type: "uint256",
        },
      ],
      name: "participation",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "id_project",
          type: "uint256",
        },
      ],
      name: "getLengthPart",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "id_project",
          type: "uint256",
        },
      ],
      name: "getParticipantByIndex",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "ID_User",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "indice",
          type: "uint256",
        },
      ],
      name: "getproject",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "id_project",
          type: "uint256",
        },
      ],
      name: "getRules",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "ID_Project",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "indice",
          type: "uint256",
        },
      ],
      name: "getTicketProject",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "ID_User",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "indice",
          type: "uint256",
        },
      ],
      name: "getTicketUser",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "ID_User",
          type: "uint256",
        },
      ],
      name: "getUser",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "ID_UserPro",
          type: "uint256",
        },
      ],
      name: "getUserPro",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "ID_ProUser",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "ID_Ticket",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "ID_UserIndice",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "ListeIDUser",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "ListeProjectUser",
      outputs: [
        {
          internalType: "uint256",
          name: "id_project",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "project_name",
          type: "string",
        },
        {
          internalType: "string",
          name: "project_type",
          type: "string",
        },
        {
          internalType: "string",
          name: "localization",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "start_date",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "end_date",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "ongoing_project",
          type: "bool",
        },
        {
          internalType: "string",
          name: "project_description",
          type: "string",
        },
        {
          internalType: "string",
          name: "project_contact_information",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "tickets_total_supply",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "ListeRules",
      outputs: [
        {
          internalType: "uint256",
          name: "id_rules",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "organizer",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "tickets_sale_rev",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "total_tickets_sale_rev",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "signed_or",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "ListeUser",
      outputs: [
        {
          internalType: "uint256",
          name: "ID_User",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "Username",
          type: "string",
        },
        {
          internalType: "string",
          name: "email",
          type: "string",
        },
        {
          internalType: "string",
          name: "country",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "posta_Code",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "preferences",
          type: "string",
        },
        {
          internalType: "address",
          name: "userWallet",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "ListeUserTicket",
      outputs: [
        {
          internalType: "uint256",
          name: "ID_Ticket",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "TicketName",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "TicketPrice",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "TicketDescription",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "validity",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "ticketCreator",
          type: "string",
        },
        {
          internalType: "string",
          name: "ticketOwner",
          type: "string",
        },
        {
          internalType: "string",
          name: "options",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "ListIDProUser",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "ListIDRules",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "ListProUser",
      outputs: [
        {
          internalType: "uint256",
          name: "ID_ProUser",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "Companyname",
          type: "string",
        },
        {
          internalType: "string",
          name: "Companyemail",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "Identification",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "CompanyAddress",
          type: "string",
        },
        {
          internalType: "string",
          name: "CompanyArea",
          type: "string",
        },
        {
          internalType: "string",
          name: "CompanyBankAccount",
          type: "string",
        },
        {
          internalType: "address",
          name: "ProWallet",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "ListTicketProject",
      outputs: [
        {
          internalType: "uint256",
          name: "ID_Ticket",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "TicketName",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "TicketPrice",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "TicketDescription",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "validity",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "ticketCreator",
          type: "string",
        },
        {
          internalType: "string",
          name: "ticketOwner",
          type: "string",
        },
        {
          internalType: "string",
          name: "options",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "ID_User",
          type: "uint256",
        },
      ],
      name: "nbrProjectUser",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "ID_Project",
          type: "uint256",
        },
      ],
      name: "nbrTicketProject",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "ID_User",
          type: "uint256",
        },
      ],
      name: "nbrTicketUser",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "NumberProjectUser",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "NumberTicketsProjects",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "NumberTickettUser",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "ProjectIndice",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "id_project",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "indice",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "id_user",
          type: "uint256",
        },
      ],
      name: "RevenuePerCoOr",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "rulesIndice",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ],
  "0xb58318591Cdf2C0F0e9324106732dF8a4e9D0a54"
);

const getAccount = require("./getAccount").getAccount;

async function test() {
  dep.methods.getUser(1).call(function (error, result) {
    console.log(result);
  });}
async function test2() {
  let account = await getAccount();

  kit.addAccount(account.privateKey);

  const d = await dep.methods.CreateUser( 'req.body.Username',
    'req.body.email',
    'req.body.country',
    11,
        'req.body.preferences',
//    req.body.password,
    '0x5a095b7b97a8a703e4b287bbd73fe4b463990650');
;

  const tx = await kit.sendTransactionObject(d, {
    from: account.address,
  });

  const receipt = await tx.waitReceipt();

  console.log(receipt);
}
async function send2() {
let account = await getAccount();

  // 11. Add your account to ContractKit to sign transactions
  kit.addAccount("0xc21c2e2c5246f7be098800c2a0975ea4bebf0afcec819bb56e1e8d8666bc2806");

  // 12. Specify recipient Address
  let anAddress = "0xfe0FBC5aBC7Ad8B771b23312f6766AFFe19b55D4";

  // 13. Specify an amount to send
  let amount = 2;

  // 14. Get the Gold Token contract wrapper
  const stabletoken = await kit.contracts.getStableToken();

  // 15. Transfer gold from your account to anAddress
   let tx = await stabletoken
     .transfer( account.address, amount)
     .send({ from: anAddress });
 


  // 16. Wait for the transaction to be processed
  let receipt = await tx.waitReceipt();

  // 17. Print receipt
  console.log("Transaction receipt: %o", receipt);

  // 18. Get your new balance
  let balance = await stabletoken.balanceOf(account.address);

  // 19. Print new balance
  console.log(`Your new account balance: ${balance.toString()}`);}



// awaitWrapper();
//test();
// test2();
//readAccount()
//createAccount()
 send2()
//balance()
// 0xA13EDD2c4Eb78a4a1c8412fb4EdE67180c4Bd5C6

