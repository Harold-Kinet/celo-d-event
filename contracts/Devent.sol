pragma solidity 0.5.11;

 contract devent {
     
         struct rules {
         uint id_rules;
         uint organizer;
         mapping(uint => uint)  coorganisateur_Dist;
         mapping(uint => bool)  signed_or;
         uint[]  Listecoorganisateur;
  
         uint tickets_sale_rev;
         uint256 total_tickets_sale_rev;
       
     }

  
     
    struct ProUser {
         uint ID_ProUser;
        string Companyname;
        string Companyemail;
        uint256  Identification;
        string CompanyAddress;
        string  CompanyArea;
        string CompanyBankAccount;
    //    string password;
        address ProWallet;
     }
    
     struct project {
         uint id_project; 
         string  project_name;
         string  project_type;
         string  localization;
         uint256 start_date;
         uint256 end_date;
         bool ongoing_project;
         string project_description;
         string project_contact_information;
         uint tickets_total_supply;
     }
    
     struct User {
        uint ID_User;
        string Username;
        string email;
        string  country;
        uint posta_Code;
       // string preferences;
        string privateKey;
     //   string password;
        address userWallet;
       
     }
    
     struct Ticket {
        uint ID_Ticket;
        string TicketName;
        uint TicketPrice ;
        string TicketDescription;
        uint256 validity ;
        string ticketCreator ;
        string ticketOwner ;
        string options ;
        
     }
     
mapping(uint => ProUser) public ListProUser;

        uint[] public ListIDProUser;
     
    mapping (uint => User)  public ListeUser ;

     uint[] public ListeIDUser ; 
     
     
    mapping (uint => mapping (uint => project)) public ListeProjectUser;

     mapping (uint => uint) public NumberProjectUser ;
     
     
     
     mapping (uint => mapping (uint => Ticket)) public ListeUserTicket;

     mapping (uint => uint)  public NumberTickettUser ;
     
     
    mapping(uint=> mapping(uint => Ticket)) public ListTicketProject;
     
     mapping(uint => uint) public NumberTicketsProjects;
     
     
     mapping (uint => rules) public ListeRules ;
      
    uint[] public ListIDRules;
    
 
         uint256 public ID_UserIndice = 1;

    
    function CreateUser (
        string memory Username,
        string memory email,
        string  memory country,
        uint posta_Code,
       // string memory preferences,
      //  string memory password,
        address userWallet,
        string memory privateKey) public {
        ListeUser[ID_UserIndice].ID_User = ID_UserIndice;
        ListeUser[ID_UserIndice].Username = Username;
        ListeUser[ID_UserIndice].email = email;
        ListeUser[ID_UserIndice].country = country;
        ListeUser[ID_UserIndice].posta_Code = posta_Code;
       // ListeUser[ID_UserIndice].preferences = preferences;
        //ListeUser[ID_UserIndice].password = password;
        ListeUser[ID_UserIndice].userWallet = userWallet;
        ListeUser[ID_UserIndice].privateKey = privateKey;
        ListeIDUser.push(ID_UserIndice) ;
        ID_UserIndice++;
        }
        
        function RevenuePerCoOr (uint id_project,uint indice, uint id_user) view public returns (bool){
            uint total_tickets = ListeProjectUser[id_user][indice].tickets_total_supply;
            uint nbr_tickets_encours = NumberTicketsProjects[id_project];
            if(total_tickets <= nbr_tickets_encours) {
                return true;
            }
            else {
                return false;
            }
            
        }
        
        
      function  getUser (uint ID_User) view public returns ( string memory ,
        string memory ,
        string  memory ,
        uint ,
       // string memory,
        //string memory ,
        address,
        string  memory
        ) {
          return(   
              ListeUser[ID_User].Username ,
        ListeUser[ID_User].email,
        ListeUser[ID_User].country ,
        ListeUser[ID_User].posta_Code ,
       // ListeUser[ID_User].preferences,
        //ListeUser[ID_User].password ,
        ListeUser[ID_User].userWallet,
              ListeUser[ID_User].privateKey
  );
      }
      
        
      /*      function CreateProject (
            
         uint ID_User,
         string memory project_name,
         string memory project_type,
         string memory localization,
         uint start_date,
         uint end_date,
         bool ongoing_project,
         string memory project_description,
         string memory project_contact_information,
         uint tickets_total_supply) public {
             ListeProjectUser[ID_User][ProjectIndice].id_project = ProjectIndice;
             ListeProjectUser[ID_User][ProjectIndice].project_name = project_name;
             ListeProjectUser[ID_User][ProjectIndice].project_type = project_type;
             ListeProjectUser[ID_User][ProjectIndice].localization = localization;
             ListeProjectUser[ID_User][ProjectIndice].start_date = start_date;
             ListeProjectUser[ID_User][ProjectIndice].end_date = end_date;
             ListeProjectUser[ID_User][ProjectIndice].ongoing_project = ongoing_project;
             ListeProjectUser[ID_User][ProjectIndice].project_description = project_description;
             ListeProjectUser[ID_User][ProjectIndice].project_contact_information = project_contact_information;
             ListeProjectUser[ID_User][ProjectIndice].tickets_total_supply = tickets_total_supply;
             NumberProjectUser[ID_User]=ProjectIndice;
             ProjectIndice++;
             

        }*/
      uint256 public ProjectIndice = 1;
             function CreateProject (
            
         uint ID_User,
         string memory project_name,
         string memory project_type,
         string memory localization,
         uint start_date,
         uint end_date,
         bool ongoing_project,
         string memory project_description,
         string memory project_contact_information,
         uint tickets_total_supply) public {
             ListeProjectUser[ID_User][ NumberProjectUser[ID_User]].id_project = ProjectIndice;
             ListeProjectUser[ID_User][ NumberProjectUser[ID_User]].project_name = project_name;
             ListeProjectUser[ID_User][ NumberProjectUser[ID_User]].project_type = project_type;
             ListeProjectUser[ID_User][ NumberProjectUser[ID_User]].localization = localization;
             ListeProjectUser[ID_User][ NumberProjectUser[ID_User]].start_date = start_date;
             ListeProjectUser[ID_User][ NumberProjectUser[ID_User]].end_date = end_date;
             ListeProjectUser[ID_User][ NumberProjectUser[ID_User]].ongoing_project = ongoing_project;
             ListeProjectUser[ID_User][ NumberProjectUser[ID_User]].project_description = project_description;
             ListeProjectUser[ID_User][ NumberProjectUser[ID_User]].project_contact_information = project_contact_information;
             ListeProjectUser[ID_User][ NumberProjectUser[ID_User]].tickets_total_supply = tickets_total_supply;
             NumberProjectUser[ID_User]= NumberProjectUser[ID_User]+1;
             ProjectIndice++;
             

 

        }
        
        function  getproject (uint ID_User , uint indice) view public returns ( 
     uint,
         string memory ,
         string memory ,
      //   string memory ,
         uint ,
        // uint ,
         bool ,
         string memory 
         ) {
          return(  
               ListeProjectUser[ID_User][indice].id_project,
             ListeProjectUser[ID_User][indice].project_name ,
             ListeProjectUser[ID_User][indice].project_type ,
          //   ListeProjectUser[ID_User][ProjectIndice].localization ,
             ListeProjectUser[ID_User][indice].start_date,
           //  ListeProjectUser[ID_User][indice].end_date,
             ListeProjectUser[ID_User][indice].ongoing_project ,
             ListeProjectUser[ID_User][indice].project_description 
           );
      }
        
                uint256 public rulesIndice = 1;

           
    function CreateRules ( uint id_project, uint organizer, uint tickets_sale_rev, uint256 total_tickets_sale_rev) public
    {
        ListeRules[id_project].id_rules = rulesIndice;
        ListeRules[id_project].organizer = organizer;
        ListeRules[id_project].tickets_sale_rev = tickets_sale_rev;
        ListeRules[id_project].total_tickets_sale_rev = total_tickets_sale_rev;
        

        ListIDRules.push(rulesIndice) ;
        ID_UserIndice++;
        }
        
        
            function  getRules (uint id_project) view public returns ( 
         uint ,
         uint ,
         uint ,
         uint256  ) {
          return(   
             ListeRules[id_project].id_rules,
        ListeRules[id_project].organizer,
        ListeRules[id_project].tickets_sale_rev ,
        ListeRules[id_project].total_tickets_sale_rev );
      }
      
       uint public ID_ProUser = 1;

     function addProUser(
        string memory _Companyname,
        string memory _Companyemail,
        uint256  _Identification,
        string memory _CompanyAddress,
        string memory  _CompanyArea,
        string memory _CompanyBankAccount,
       // string memory _password,
        address _ProWallet
    ) public { 
        
        ListProUser[ID_ProUser].ID_ProUser = ID_ProUser;
        ListProUser[ID_ProUser].Companyname = _Companyname;
        ListProUser[ID_ProUser].Companyemail = _Companyemail;
        ListProUser[ID_ProUser].Identification = _Identification;
        ListProUser[ID_ProUser].CompanyAddress = _CompanyAddress;
        ListProUser[ID_ProUser].CompanyArea = _CompanyArea;
        ListProUser[ID_ProUser].CompanyBankAccount = _CompanyBankAccount;
       // ListProUser[ID_ProUser].password = _password;
        ListProUser[ID_ProUser].ProWallet = _ProWallet;
        
        ListIDProUser.push(ID_ProUser);
        
             ID_ProUser ++;
        
    
    }
    
    
    
    uint public ID_Ticket = 1;
    
      function addTicket(
      uint _ID_User,
      uint _ID_Project,
        string memory _TicketName,
        uint _TicketPrice ,
        string memory _TicketDescription,
        uint256 _validity ,
        string memory _ticketCreator ,
        string memory _ticketOwner ,
        string memory _options 
    ) public { 
        
         uint total_tickets = ListeProjectUser[_ID_User][NumberTickettUser[_ID_User]].tickets_total_supply;
            uint nbr_tickets_encours = NumberTicketsProjects[_ID_Project];
            
        require(total_tickets >= nbr_tickets_encours);
        
        ListeUserTicket[_ID_User][NumberTickettUser[_ID_User]].ID_Ticket = ID_Ticket;
        ListeUserTicket[_ID_User][NumberTickettUser[_ID_User]].TicketName = _TicketName;
        ListeUserTicket[_ID_User][NumberTickettUser[_ID_User]].TicketPrice = _TicketPrice;
        ListeUserTicket[_ID_User][NumberTickettUser[_ID_User]].TicketDescription = _TicketDescription;
        ListeUserTicket[_ID_User][NumberTickettUser[_ID_User]].validity = _validity;
        ListeUserTicket[_ID_User][NumberTickettUser[_ID_User]].ticketCreator = _ticketCreator;
        ListeUserTicket[_ID_User][NumberTickettUser[_ID_User]].ticketOwner = _ticketOwner;
        ListeUserTicket[_ID_User][NumberTickettUser[_ID_User]].options = _options;


        NumberTickettUser[_ID_User] = NumberTickettUser[_ID_User] + 1;
        
        ListTicketProject[_ID_Project][NumberTicketsProjects[_ID_Project]].ID_Ticket = ID_Ticket;
        ListTicketProject[_ID_Project][NumberTicketsProjects[_ID_Project]].TicketName = _TicketName;
        ListTicketProject[_ID_Project][NumberTicketsProjects[_ID_Project]].TicketPrice = _TicketPrice;
        ListTicketProject[_ID_Project][NumberTicketsProjects[_ID_Project]].TicketDescription = _TicketDescription;
        ListTicketProject[_ID_Project][NumberTicketsProjects[_ID_Project]].validity = _validity;
        ListTicketProject[_ID_Project][NumberTicketsProjects[_ID_Project]].ticketCreator = _ticketCreator;
        ListTicketProject[_ID_Project][NumberTicketsProjects[_ID_Project]].ticketOwner = _ticketOwner;
        ListTicketProject[_ID_Project][NumberTicketsProjects[_ID_Project]].options = _options;

        NumberTicketsProjects[_ID_Project] = NumberTicketsProjects[_ID_Project] +1;

        
        ID_Ticket++;
  
    }
    
      function  getUserPro (uint ID_UserPro) view public returns ( string memory ,
        string memory ,
        uint256 ,
        string memory ,
        string memory ,
        string memory ,
        address ) {
          return(   
        ListProUser[ID_UserPro].Companyname ,
        ListProUser[ID_UserPro].Companyemail,
        ListProUser[ID_UserPro].Identification ,
        ListProUser[ID_UserPro].CompanyAddress ,
        ListProUser[ID_UserPro].CompanyArea ,
        ListProUser[ID_UserPro].CompanyBankAccount,
                ListProUser[ID_UserPro].ProWallet


        );
               
      }

         function  getTicketUser (uint ID_User, uint indice) view public returns (uint,
        string memory ,
        uint ,
        string memory ,
        uint256 ,
        string memory
      //  string memory 
        ) {
          return(   
               ListeUserTicket[ID_User][indice].ID_Ticket,
         ListeUserTicket[ID_User][indice].TicketName,
        ListeUserTicket[ID_User][indice].TicketPrice,
        ListeUserTicket[ID_User][indice].TicketDescription,
        ListeUserTicket[ID_User][indice].validity,
        ListeUserTicket[ID_User][indice].ticketCreator
      //  ListeUserTicket[ID_User][indice].options 

        );
              
      }
         function  getTicketProject (uint ID_Project, uint indice) view public returns (uint,
        string memory ,
        uint ,
        string memory ,
        uint256 ,
        string memory
        //string memory 
        ) {
          return(   
                ListTicketProject[ID_Project][indice].ID_Ticket,
         ListTicketProject[ID_Project][indice].TicketName,
        ListTicketProject[ID_Project][indice].TicketPrice,
        ListTicketProject[ID_Project][indice].TicketDescription,
        ListTicketProject[ID_Project][indice].validity,
        ListTicketProject[ID_Project][indice].ticketCreator
      //  ListTicketProject[ID_Project][indice].options 

        );
              
      }
     
     
      function participation (uint ID_User , uint id_project ,uint Por_distribution) public {
                  ListeRules[id_project].coorganisateur_Dist[ID_User]= Por_distribution;
                  ListeRules[id_project].Listecoorganisateur.push(ID_User);

 

      }
      
       function ConfirmeParticipation (uint ID_User , uint id_project ) public {
                  ListeRules[id_project].signed_or[ID_User]= true;


      }
      
          function getParticipantByIndex (uint index , uint id_project) view public returns (uint  , uint ){
          uint ID_User =  ListeRules[id_project].Listecoorganisateur[index] ;
          return(ID_User,ListeRules[id_project].coorganisateur_Dist[ID_User]);
          
      }
      
      function getLengthPart ( uint id_project)  view public returns (uint ){
         return (ListeRules[id_project].Listecoorganisateur.length) ;
          
      }
      
      
      function nbrProjectUser(uint ID_User) view public returns(uint)
      {
        return  NumberProjectUser[ID_User] ;  
      }
      
      function getCoOrganizateur(uint id_project,uint indice) view public returns(uint, uint, bool)
      {
          uint coOrg =ListeRules[id_project].Listecoorganisateur[indice];
          return(coOrg, ListeRules[id_project].coorganisateur_Dist[coOrg], ListeRules[id_project].signed_or[coOrg]);
      }
      
      
       function nbrTicketUser(uint ID_User) view public returns(uint)
      {
        return   NumberTickettUser[ID_User] ;  
      }
      
      
       function nbrTicketProject(uint ID_Project) view public returns(uint)
      {
        return   NumberTicketsProjects[ID_Project] ;  
      }
     
 }
 


