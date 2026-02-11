// Aromatic Plants Database for Casina RE - January 2026
const aromaticPlants = [
    {
        name: "Basilico",
        latin: "Ocimum basilicum",
        icon: "🌿",
        semina: "15-20 Gennaio (Luna Crescente)",
        trapianto: "25-30 Gennaio (Luna Calante)",
        raccolto: "Primavera-Estate",
        note: "Proteggere dal freddo. Preferisce giorni della foglia.",
        tags: ["semina"]
    },
    {
        name: "Rosmarino",
        latin: "Rosmarinus officinalis",
        icon: "🌲",
        semina: "Non consigliato a gennaio",
        trapianto: "22-28 Gennaio (Luna Calante)",
        raccolto: "Tutto l'anno",
        note: "Pianta resistente. Ideale per talee in luna calante.",
        tags: ["trapianto"]
    },
    {
        name: "Salvia",
        latin: "Salvia officinalis",
        icon: "🍃",
        semina: "Non consigliato a gennaio",
        trapianto: "23-29 Gennaio (Luna Calante)",
        raccolto: "Maggio-Ottobre",
        note: "Resistente al freddo. Trapianto in luna calante.",
        tags: ["trapianto"]
    },
    {
        name: "Timo",
        latin: "Thymus vulgaris",
        icon: "🌱",
        semina: "Non consigliato a gennaio",
        trapianto: "24-30 Gennaio (Luna Calante)",
        raccolto: "Maggio-Settembre",
        note: "Pianta perenne resistente. Talee in luna calante.",
        tags: ["trapianto"]
    },
    {
        name: "Prezzemolo",
        latin: "Petroselinum crispum",
        icon: "🌿",
        semina: "8-14 Gennaio (Luna Nuova/Crescente)",
        trapianto: "25-31 Gennaio (Luna Calante)",
        raccolto: "Tutto l'anno",
        note: "Giorni della foglia. Seminare in luna crescente.",
        tags: ["semina", "trapianto"]
    },
    {
        name: "Menta",
        latin: "Mentha",
        icon: "🍀",
        semina: "Non consigliato a gennaio",
        trapianto: "22-30 Gennaio (Luna Calante)",
        raccolto: "Maggio-Settembre",
        note: "Molto invasiva. Talee in luna calante, giorni della foglia.",
        tags: ["trapianto"]
    },
    {
        name: "Origano",
        latin: "Origanum vulgare",
        icon: "🌾",
        semina: "15-19 Gennaio (Luna Crescente)",
        trapianto: "23-29 Gennaio (Luna Calante)",
        raccolto: "Giugno-Settembre",
        note: "Resistente. Preferisce giorni del fiore.",
        tags: ["semina", "trapianto"]
    },
    {
        name: "Erba Cipollina",
        latin: "Allium schoenoprasum",
        icon: "🌿",
        semina: "7-13 Gennaio (Luna Nuova)",
        trapianto: "24-30 Gennaio (Luna Calante)",
        raccolto: "Marzo-Novembre",
        note: "Giorni della radice. Semina in luna nuova.",
        tags: ["semina", "trapianto"]
    },
    {
        name: "Lavanda",
        latin: "Lavandula angustifolia",
        icon: "💜",
        semina: "Non consigliato a gennaio",
        trapianto: "25-31 Gennaio (Luna Calante)",
        raccolto: "Giugno-Agosto",
        note: "Giorni del fiore. Talee in luna calante.",
        tags: ["trapianto"]
    },
    {
        name: "Melissa",
        latin: "Melissa officinalis",
        icon: "🌿",
        semina: "10-16 Gennaio (Luna Crescente)",
        trapianto: "23-28 Gennaio (Luna Calante)",
        raccolto: "Giugno-Settembre",
        note: "Giorni della foglia. Proprietà calmanti.",
        tags: ["semina", "trapianto"]
    },
    {
        name: "Camomilla",
        latin: "Matricaria chamomilla",
        icon: "🌼",
        semina: "12-18 Gennaio (Luna Crescente)",
        trapianto: "Non necessario",
        raccolto: "Maggio-Giugno",
        note: "Giorni del fiore. Semina diretta in luna crescente.",
        tags: ["semina"]
    },
    {
        name: "Finocchio",
        latin: "Foeniculum vulgare",
        icon: "🌿",
        semina: "8-12 Gennaio (Luna Nuova)",
        trapianto: "26-30 Gennaio (Luna Calante)",
        raccolto: "Estate",
        note: "Giorni del frutto/seme. Semina in luna nuova.",
        tags: ["semina", "trapianto"]
    },
    {
        name: "Aneto",
        latin: "Anethum graveolens",
        icon: "🌿",
        semina: "14-19 Gennaio (Luna Crescente)",
        trapianto: "Non consigliato",
        raccolto: "Estate",
        note: "Giorni del frutto. Semina diretta in luna crescente.",
        tags: ["semina"]
    },
    {
        name: "Maggiorana",
        latin: "Origanum majorana",
        icon: "🌿",
        semina: "13-18 Gennaio (Luna Crescente)",
        trapianto: "24-29 Gennaio (Luna Calante)",
        raccolto: "Giugno-Ottobre",
        note: "Giorni della foglia. Sensibile al freddo.",
        tags: ["semina", "trapianto"]
    },
    {
        name: "Coriandolo",
        latin: "Coriandrum sativum",
        icon: "🌿",
        semina: "9-14 Gennaio (Luna Crescente)",
        trapianto: "Non consigliato",
        raccolto: "Primavera-Estate",
        note: "Giorni del frutto. Semina diretta preferita.",
        tags: ["semina"]
    }
];

// Moon phases for January 2026
const moonPhases2026 = {
    1: { phase: "waning-crescent", name: "Luna Calante", icon: "🌘", activity: "Trapianto" },
    2: { phase: "waning-crescent", name: "Luna Calante", icon: "🌘", activity: "Trapianto" },
    3: { phase: "waning-crescent", name: "Luna Calante", icon: "🌘", activity: "Trapianto" },
    4: { phase: "waning-crescent", name: "Luna Calante", icon: "🌘", activity: "Trapianto" },
    5: { phase: "waning-crescent", name: "Luna Calante", icon: "🌘", activity: "Trapianto" },
    6: { phase: "waning-crescent", name: "Luna Calante", icon: "🌑", activity: "Preparazione" },
    7: { phase: "new-moon", name: "Luna Nuova", icon: "🌑", activity: "Semina Radici" },
    8: { phase: "waxing-crescent", name: "Luna Crescente", icon: "🌒", activity: "Semina Foglie" },
    9: { phase: "waxing-crescent", name: "Luna Crescente", icon: "🌒", activity: "Semina Foglie" },
    10: { phase: "waxing-crescent", name: "Luna Crescente", icon: "🌓", activity: "Semina Foglie" },
    11: { phase: "waxing-crescent", name: "Luna Crescente", icon: "🌓", activity: "Semina Foglie" },
    12: { phase: "waxing-crescent", name: "Luna Crescente", icon: "🌓", activity: "Semina Fiori" },
    13: { phase: "waxing-crescent", name: "Luna Crescente", icon: "🌔", activity: "Semina Fiori" },
    14: { phase: "waxing-crescent", name: "Luna Crescente", icon: "🌔", activity: "Semina Foglie" },
    15: { phase: "waxing-crescent", name: "Luna Crescente", icon: "🌔", activity: "Semina Foglie" },
    16: { phase: "waxing-crescent", name: "Luna Crescente", icon: "🌔", activity: "Semina Foglie" },
    17: { phase: "waxing-crescent", name: "Luna Crescente", icon: "🌕", activity: "Semina Foglie" },
    18: { phase: "waxing-crescent", name: "Luna Crescente", icon: "🌕", activity: "Semina Foglie" },
    19: { phase: "waxing-crescent", name: "Luna Crescente", icon: "🌕", activity: "Semina Foglie" },
    20: { phase: "waxing-crescent", name: "Luna Crescente", icon: "🌕", activity: "Semina Foglie" },
    21: { phase: "full-moon", name: "Luna Piena", icon: "🌕", activity: "Raccolta" },
    22: { phase: "waning-crescent", name: "Luna Calante", icon: "🌖", activity: "Trapianto" },
    23: { phase: "waning-crescent", name: "Luna Calante", icon: "🌖", activity: "Trapianto" },
    24: { phase: "waning-crescent", name: "Luna Calante", icon: "🌖", activity: "Trapianto" },
    25: { phase: "waning-crescent", name: "Luna Calante", icon: "🌗", activity: "Trapianto" },
    26: { phase: "waning-crescent", name: "Luna Calante", icon: "🌗", activity: "Trapianto" },
    27: { phase: "waning-crescent", name: "Luna Calante", icon: "🌗", activity: "Trapianto" },
    28: { phase: "waning-crescent", name: "Luna Calante", icon: "🌘", activity: "Trapianto" },
    29: { phase: "waning-crescent", name: "Luna Calante", icon: "🌘", activity: "Trapianto" },
    30: { phase: "waning-crescent", name: "Luna Calante", icon: "🌘", activity: "Trapianto" },
    31: { phase: "waning-crescent", name: "Luna Calante", icon: "🌘", activity: "Preparazione" }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeMoonPhase();
    initializeCalendar();
    initializePlants();
    initializeChecklist();
    initializeFilters();
});

// Moon Phase Display
function initializeMoonPhase() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    
    // Use January 2026 data (month 0 = January)
    let displayDay = day;
    if (month !== 0 || currentDate.getFullYear() !== 2026) {
        // If not January 2026, default to day 1
        displayDay = 1;
    }
    
    const moonData = moonPhases2026[displayDay] || moonPhases2026[1];
    
    document.getElementById('moon-icon').textContent = moonData.icon;
    document.getElementById('current-phase').textContent = moonData.name;
    document.getElementById('current-date').textContent = `${displayDay} Gennaio 2026`;
    document.getElementById('moon-recommendation').textContent = moonData.activity;
}

// Calendar Generation
function initializeCalendar() {
    const calendar = document.getElementById('calendar');
    
    for (let day = 1; day <= 31; day++) {
        const moonData = moonPhases2026[day];
        const dayElement = document.createElement('div');
        dayElement.className = `calendar-day ${moonData.phase}`;
        dayElement.innerHTML = `
            <div class="date">${day}</div>
            <div class="moon">${moonData.icon}</div>
            <div class="activity">${moonData.activity}</div>
        `;
        dayElement.title = `${day} Gennaio - ${moonData.name} - ${moonData.activity}`;
        calendar.appendChild(dayElement);
    }
}

// Plants Display
function initializePlants() {
    const plantsGrid = document.getElementById('plants-grid');
    
    aromaticPlants.forEach(plant => {
        const plantCard = document.createElement('div');
        plantCard.className = 'plant-card';
        plantCard.dataset.tags = plant.tags.join(',');
        
        const tagsHTML = plant.tags.map(tag => 
            `<span class="tag ${tag}">${tag.charAt(0).toUpperCase() + tag.slice(1)}</span>`
        ).join('');
        
        plantCard.innerHTML = `
            <div class="plant-header">
                <div class="plant-name">${plant.name}</div>
                <div class="plant-icon">${plant.icon}</div>
            </div>
            <div class="plant-latin">${plant.latin}</div>
            <div class="plant-info"><strong>Semina:</strong> ${plant.semina}</div>
            <div class="plant-info"><strong>Trapianto:</strong> ${plant.trapianto}</div>
            <div class="plant-info"><strong>Raccolto:</strong> ${plant.raccolto}</div>
            <div class="plant-info"><strong>Note:</strong> ${plant.note}</div>
            <div class="plant-tags">${tagsHTML}</div>
        `;
        
        plantsGrid.appendChild(plantCard);
    });
}

// Filter Functionality
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const plantCards = document.querySelectorAll('.plant-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            // Filter plants
            plantCards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const tags = card.dataset.tags.split(',');
                    if (tags.includes(filter)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
}

// Checklist Functionality
function initializeChecklist() {
    loadChecklist();
    
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task-input');
    
    addTaskBtn.addEventListener('click', addTask);
    newTaskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
}

function addTask() {
    const input = document.getElementById('new-task-input');
    const taskText = input.value.trim();
    
    if (taskText === '') return;
    
    const tasks = getTasksFromStorage();
    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
        date: new Date().toISOString()
    };
    
    tasks.push(newTask);
    saveTasksToStorage(tasks);
    input.value = '';
    renderChecklist();
}

function deleteTask(taskId) {
    let tasks = getTasksFromStorage();
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasksToStorage(tasks);
    renderChecklist();
}

function toggleTask(taskId) {
    const tasks = getTasksFromStorage();
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        saveTasksToStorage(tasks);
        renderChecklist();
    }
}

function loadChecklist() {
    // Add default tasks if none exist
    const tasks = getTasksFromStorage();
    if (tasks.length === 0) {
        const defaultTasks = [
            { id: 1, text: "Preparare il terreno per la semina di basilico (15-20 Gennaio)", completed: false },
            { id: 2, text: "Raccogliere talee di rosmarino per trapianto in luna calante", completed: false },
            { id: 3, text: "Seminare prezzemolo nei giorni della foglia (8-14 Gennaio)", completed: false },
            { id: 4, text: "Verificare protezione dal freddo per piante sensibili", completed: false },
            { id: 5, text: "Pianificare raccolta durante luna piena (21 Gennaio)", completed: false }
        ];
        saveTasksToStorage(defaultTasks);
    }
    renderChecklist();
}

function renderChecklist() {
    const container = document.getElementById('checklist-container');
    const tasks = getTasksFromStorage();
    
    if (tasks.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666;">Nessuna attività. Aggiungi la prima!</p>';
        return;
    }
    
    container.innerHTML = tasks.map(task => `
        <div class="checklist-item ${task.completed ? 'completed' : ''}">
            <input type="checkbox" 
                   id="task-${task.id}" 
                   ${task.completed ? 'checked' : ''}
                   onchange="toggleTask(${task.id})">
            <label for="task-${task.id}">${task.text}</label>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Elimina</button>
        </div>
    `).join('');
}

function getTasksFromStorage() {
    const tasksJSON = localStorage.getItem('aromaticPlantsTasks');
    return tasksJSON ? JSON.parse(tasksJSON) : [];
}

function saveTasksToStorage(tasks) {
    localStorage.setItem('aromaticPlantsTasks', JSON.stringify(tasks));
}

// Make functions globally available
window.deleteTask = deleteTask;
window.toggleTask = toggleTask;
