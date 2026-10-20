// Grouped Salesforce Setup pages
const sections = [
  {
    title: "🔹 Core Setup",
    pages: [
      {
        name: "Setup Home",
        path: "/lightning/setup/SetupOneHome/home",
        icon: "🛠️",
      },
      {
        name: "Object Manager",
        path: "/lightning/setup/ObjectManager/home",
        icon: "📦",
      },
      {
        name: "Field History Tracking",
        path: "/lightning/setup/FieldHistoryTracking/home",
        icon: "📜",
      },
      {
        name: "Schema Builder",
        path: "/lightning/setup/SchemaBuilder/home",
        icon: "🗺️",
      },
      {
        name: "Custom Labels",
        path: "/lightning/setup/ExternalStrings/home",
        icon: "🏷️",
      },
      {
        name: "Custom Metadata",
        path: "/lightning/setup/CustomMetadata/home",
        icon: "📑",
      },
      {
        name: "Custom Settings",
        path: "/lightning/setup/CustomSettings/home",
        icon: "⚙️",
      },
      {
        name: "App Builder",
        path: "/lightning/setup/FlexiPageList/home",
        icon: "🧩",
      },
      {
        name: "Picklist Value Sets",
        path: "/lightning/setup/Picklists/home",
        icon: "🎛️",
      },
    ],
  },
  {
    title: "🔹 User & Security",
    pages: [
      {
        name: "Users",
        path: "/lightning/setup/ManageUsers/home",
        icon: "👤",
      },
      {
        name: "Profiles",
        path: "/lightning/setup/EnhancedProfiles/home",
        icon: "🛡️",
      },
      {
        name: "Permission Sets",
        path: "/lightning/setup/PermSets/home",
        icon: "🔑",
      },
      {
        name: "Roles",
        path: "/lightning/setup/Roles/home",
        icon: "👥",
      },
      {
        name: "Queues",
        path: "/lightning/setup/Queues/home",
        icon: "📬",
      },
      {
        name: "Sharing Settings",
        path: "/lightning/setup/SecuritySharing/home",
        icon: "🤝",
      },
      {
        name: "Session Settings",
        path: "/lightning/setup/SecuritySession/home",
        icon: "🔒",
      },
      {
        name: "Login History",
        path: "/lightning/setup/OrgLoginHistory/home",
        icon: "📊",
      },
    ],
  },
  {
    title: "🔹 Communication",
    pages: [
      {
        name: "Email Templates",
        path: "/lightning/setup/CommunicationTemplatesEmail/home",
        icon: "✉️",
      },
      {
        name: "Deliverability",
        path: "/lightning/setup/OrgEmailSettings/home",
        icon: "📨",
      },
      {
        name: "Org-Wide Addresses",
        path: "/lightning/setup/OrgWideEmailAddresses/home",
        icon: "🏢",
      },
    ],
  },
  {
    title: "🔹 Development",
    pages: [
      {
        name: "Apex Classes",
        path: "/lightning/setup/ApexClasses/home",
        icon: "📜",
      },
      {
        name: "Apex Triggers",
        path: "/lightning/setup/ApexTriggers/home",
        icon: "⚡",
      },
      {
        name: "Static Resources",
        path: "/lightning/setup/StaticResources/home",
        icon: "📂",
      },
      {
        name: "Remote Site Settings",
        path: "/lightning/setup/SecurityRemoteProxy/home",
        icon: "🌐",
      },
      {
        name: "Named Credentials",
        path: "/lightning/setup/NamedCredential/home",
        icon: "🔗",
      },
      {
        name: "Lightning Components",
        path: "/lightning/setup/LightningComponentBundles/home",
        icon: "✨",
      },
      {
        name: "Visualforce Pages",
        path: "/lightning/setup/ApexPages/home",
        icon: "📄",
      },
      {
        name: "Visualforce Components",
        path: "/lightning/setup/ApexComponents/home",
        icon: "🧱",
      },
    ],
  },
  {
    title: "🔹 Data & Automation",
    pages: [
      {
        name: "Matching Rules",
        path: "/lightning/setup/MatchingRules/home",
        icon: "🧩",
      },

      {
        name: "Duplicate Rules",
        path: "/lightning/setup/DuplicateRules/home",
        icon: "🌀",
      },

      {
        name: "Flows",
        path: "/lightning/setup/Flows/home",
        icon: "🔄",
      },
      {
        name: "Process Builder",
        path: "/lightning/setup/ProcessAutomation/home",
        icon: "⚙️",
      },
      {
        name: "Workflow Rules",
        path: "/lightning/setup/WorkflowRules/home",
        icon: "📋",
      },
      {
        name: "Scheduled Jobs",
        path: "/lightning/setup/ScheduledJobs/home",
        icon: "⏰",
      },
    ],
  },
  {
    title: "🔹 User Personal Settings",
    pages: [
      {
        name: "My Personal Info",
        path: "/lightning/settings/personal/PersonalInformation/home",
        icon: "🙋",
      },
      {
        name: "Advanced User Details",
        path: "/lightning/settings/personal/AdvancedUserDetails/home",
        icon: "⚙️",
      },
      {
        name: "Change Password",
        path: "/lightning/settings/personal/ChangePassword/home",
        icon: "🔑",
      },
      {
        name: "Email Settings",
        path: "/lightning/settings/personal/EmailSettings/home",
        icon: "✉️",
      },
      {
        name: "Language & Time Zone",
        path: "/lightning/settings/personal/LanguageAndTimeZone/home",
        icon: "🌍",
      },
      {
        name: "Reset Security Token",
        path: "/lightning/settings/personal/ResetApiToken/home",
        icon: "🔑",
      },
    ],
  },
];
