export default function getAccessTextFromCode(code) {
    switch(code) {
        case 1: return "Full Access";
        case 2: return "Can edit";
        case 3: return "Can view";
        case 4: return "No access";
    }
}