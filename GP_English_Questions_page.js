const examInfo = {
    exam: "Gram Panchayat 2026",
    subject: "English",
    time: 45
};

/* =========================
   QUESTIONS
========================= */

const questions = [

    // {
    //     question: "Choose the alternative which is closely resembles the mirror image of the given combination",
    //     image:"Images/Reasoning/Reasoning_1.jpeg",
    //     options: ["Option A", "Option B", "Option C", "Option D"],
    //     answer: 1
    // },

    {
        question: "What is the correct synonym of 'Obstinate' ?",
        options: ["Stubborn", "Pretty", "Silly", "Clever"],
        answer: 0
    },

    {
        question: "Choose the correct synonym of 'Alert' ?",
        options: ["Hostile", "Watchful", "Brave", "Quick"],
        answer: 1
    },

    {
        question: "Choose the correct synonym of 'Accede' ?",
        options: ["Consent", "Angry", "Assess", "Proceed"],
        answer: 0
    },

    {
        question: "Voice Change (Active to Passive) - 'Sita loves savitri' ",
        options: ["Savitri loved by sita", 
                  "Savitri is loved by Sita", 
                  "Savitri is loved to Sita", 
                  "Savitri is loved to Sita"],
        answer: 1
    },

     {
        question: "Voice Change (Active to Passive) - 'The mason is building the wall'",
        options: ["The wall built by the mason", 
                  "The wall is being built by mason", 
                  "The wall is built by the mason", 
                  "The wall is being built by the mason"],
        answer: 3
    },

    
     {
        question: "Choose the correct antonym 'Omit' ?",
        options: ["Exclude", "Include", "Undertake", "Add"],
        answer: 1
    },

     {
        question: "What is the correct antonym of 'Integration' ?",
        options: ["Unit", "Synthesis", "Linking", "Fragmentation"],
        answer: 3
    },

     {
        question: "Choose the correct punctuation",
        options: ["England France and Italy,formed an aliance", 
                  "England,France and Italy formed an aliance", 
                  "England France,and,Italy formed an aliance", 
                  "England France and Italy formed,an,aliance"],
        answer: 1
    },

    {
        question: "Choose the correct punctuation",
        options: ["He lost,lands,money,reputation and friend's", 
                  "He lost lands money reputation and friend's", 
                  "He lost lands money,reputation and friend's", 
                  "He lost lands,money,reputation and friend's"],
        answer: 3
    },

    {
        question: "Choose the correct punctuation",
        options: ["West Bengal is surrounded by Odisha,Bihar,Sikkim,Assam etc.", 
                  "West Bengal is surrounded by Odisha Bihar,Sikkim,Assam etc.", 
                  "West,Bengal is surrounded by Odisha,Bihar,Sikkim,Assam etc.", 
                  "West . Bengal is surrounded by Odisha,Bihar,Sikkim,Assam etc."],
        answer: 0
    },

     {
        question: "Choose the correct spelling",
        options: ["Excution", "Excitment", "Expedition", "Extrection"],
        answer: 2
    },

     {
        question: "Choose the correct spelling",
        options: ["Introvert", "Introvrt", "Intraovert", "Intreovert"],
        answer: 0
    },

     {
        question: "Choose the correct spelling",
        options: ["Discer", "Discerrn", "Discern", "None of These"],
        answer: 2
    },

    {
        question: "Choose the correct spelling",
        options: ["Visionery", "Viseonary", "Visionary", "None of These"],
        answer: 2
    },

    {
        question: "Find the error - 'Knowledge of (A)/at least two languages (B)/are required to pass the examination (C)/No error (D)'",
        options: ["A", "B", "C", "D"],
        answer: 2
    },

     {
        question: "Find the error - 'Gowri told me (A)/her name after (B)/he left (C)/B and C (D)'",
        options: ["A", "B", "C", "D"],
        answer: 3
    },

    {
        question: "Find the error - 'No sooner had the hockey match started (A)/when it began (B)/to rain (C)/No error (D)'",
        options: ["A", "B", "C", "D"],
        answer: 1
    },

    {
        question: "Find the error - 'My sister (A)/has read (B)/pages after pages of the bible(C)/No error (D)'",
        options: ["A", "B", "C", "D"],
        answer: 2
    },

     {
        question: "Fill in the blanks - 'My book is the new one _______ is the torn one'",
        options: ["Your", "The book of you", "Yours", "The book your"],
        answer: 2
    },

     {
        question: "Fill in the blanks - 'They needn't worry ________ ?'",
        options: ["Isn't", "Doesn't it", "Don't it", "Need they"],
        answer: 3
    },

    {
        question: "Fill in the blanks - 'He is different alike __________  praise and blame'",
        options: ["In", "To", "For", "About"],
        answer: 1
    },

    {
        question: "Fill in the blanks - 'Ashoka's accession _________ the throme was celebrated with great promp'",
        options: ["For", "With", "Against", "To"],
        answer: 3
    },

    {
        question: "Idiom Meaning - 'I have <u> other fish to fry </u>'",
        options: ["To cook the food", "All of the above", "Some important work to attend ", "To attend the friends"],
        answer: 2
    },

    {
        question: "Idiom Meaning - 'A close shave'",
        options: ["A narrow escape from danger", "Stubble", "Very short hair", "Hairless skin"],
        answer: 0
    },

    {
        question: "Idiom Meaning - 'His argument doesn't <u> hold water </u>'",
        options: ["To have effect", "To influence", "To check the flow of water", "Sound logical fact"],
        answer: 3
    },

    {
        question: "Choose the correct Preposition - 'He is _________ the phone right now'",
        options: ["At", "On", "To", "In"],
        answer: 1
    },

    {
        question: "Choose the correct Preposition - 'I have no desire _________ fame'",
        options: ["Of", "For", "In", "To"],
        answer: 1
    },

    {
        question: "Choose the correct Preposition - 'There is an exception __________ every rule'",
        options: ["To", "In", "For", "Up"],
        answer: 0
    },

    {
        question: "Choose the correct Article - 'Rama is ________ MA in english'",
        options: ["Of", "In", "An", "To"],
        answer: 2
    },

    {
        question: "Choose the correct Preposition - 'The sun rises ________ the sky'",
        options: ["At", "In", "On", "To"],
        answer: 1
    },

    {
        question: "Choose the correct Preposition - 'Netaji Subhas was born ______ 23rd january ______ the year 1897'",
        options: ["On", "At", "In", "'On' and 'In' both"],
        answer: 3
    },

     {
        question: "Choose the correct Articles - 'Honestly is ________ best policy'",
        options: ["A", "In", "An", "The"],
        answer: 3
    },

     {
        question: "Choose the correct Vocabulary - Nearest meaning of 'Authentic'",
        options: ["Lovable", "Distrees", "Praise", "Genuine"],
        answer: 3
    }
    
    
];
