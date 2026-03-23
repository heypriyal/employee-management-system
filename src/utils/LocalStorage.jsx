const employees = [
  {
    id: 1,
    name: "Aarav",
    email: "2@2",
    password: "1234",
    taskCounts: {
      active: 1,
      failed: 0,
      completed: 2,
      newTask: 1
    },
    tasks: [
      {
        taskTitle: "Fix login bug",
        taskDescription: "Resolve issue with user login failure",
        date: "2026-03-20",
        category: "Development",
        active: false,
        failed: false,
        completed: false,
        newTask: true
      },
      {
        taskTitle: "Update UI",
        taskDescription: "Improve dashboard styling",
        date: "2026-03-18",
        category: "Design",
        active: false,
        failed: false,
        completed: true,
        newTask: false
      },
      {
        taskTitle: "Write API docs",
        taskDescription: "Document all endpoints",
        date: "2026-03-15",
        category: "Documentation",
        active: false,
        failed: false,
        completed: true,
        newTask: false
      }
    ]
  },
  {
    id: 2,
    name: "Ishita",
    email: "emp2@example.com",
    password: "1234",
    taskCounts: {
      active: 1,
      failed: 1,
      completed: 1,
      newTask: 1
    },
    tasks: [
      {
        taskTitle: "Test payment flow",
        taskDescription: "Check all payment scenarios",
        date: "2026-03-21",
        category: "Testing",
        active: false,
        failed: false,
        completed: false,
        newTask: true
      },
      {
        taskTitle: "Bug report",
        taskDescription: "List all UI bugs",
        date: "2026-03-19",
        category: "Testing",
        active: false,
        failed: true,
        completed: false,
        newTask: false
      },
      {
        taskTitle: "Client meeting",
        taskDescription: "Discuss requirements",
        date: "2026-03-17",
        category: "Management",
        active: false,
        failed: false,
        completed: true,
        newTask: false
      }
    ]
  },
  {
    id: 3,
    name: "Rohan",
    email: "emp3@example.com",
    password: "1234",
    taskCounts: {
      active: 1,
      failed: 1,
      completed: 2,
      newTask: 1
    },
    tasks: [
      {
        taskTitle: "Optimize database",
        taskDescription: "Improve query performance",
        date: "2026-03-22",
        category: "Backend",
        active: false,
        failed: false,
        completed: false,
        newTask: true
      },
      {
        taskTitle: "Fix API error",
        taskDescription: "Resolve 500 error",
        date: "2026-03-18",
        category: "Backend",
        active: false,
        failed: false,
        completed: true,
        newTask: false
      },
      {
        taskTitle: "Code review",
        taskDescription: "Review team PRs",
        date: "2026-03-16",
        category: "Development",
        active: false,
        failed: false,
        completed: true,
        newTask: false
      },
      {
        taskTitle: "Deploy app",
        taskDescription: "Push to production",
        date: "2026-03-14",
        category: "DevOps",
        active: false,
        failed: true,
        completed: false,
        newTask: false
      }
    ]
  },
  {
    id: 4,
    name: "Neha",
    email: "emp4@example.com",
    password: "1234",
    taskCounts: {
      active: 1,
      failed: 0,
      completed: 2,
      newTask: 1
    },
    tasks: [
      {
        taskTitle: "Design homepage",
        taskDescription: "Create landing UI",
        date: "2026-03-20",
        category: "Design",
        active: false,
        failed: false,
        completed: false,
        newTask: true
      },
      {
        taskTitle: "Create logo",
        taskDescription: "Design brand logo",
        date: "2026-03-18",
        category: "Design",
        active: false,
        failed: false,
        completed: true,
        newTask: false
      },
      {
        taskTitle: "User feedback",
        taskDescription: "Collect user opinions",
        date: "2026-03-16",
        category: "Research",
        active: false,
        failed: false,
        completed: true,
        newTask: false
      }
    ]
  },
  {
    id: 5,
    name: "Karan",
    email: "emp5@example.com",
    password: "1234",
    taskCounts: {
      active: 1,
      failed: 1,
      completed: 1,
      newTask: 1
    },
    tasks: [
      {
        taskTitle: "Setup CI/CD",
        taskDescription: "Automate deployment",
        date: "2026-03-22",
        category: "DevOps",
        active: false,
        failed: false,
        completed: false,
        newTask: true
      },
      {
        taskTitle: "Server monitoring",
        taskDescription: "Check uptime & logs",
        date: "2026-03-19",
        category: "DevOps",
        active: false,
        failed: false,
        completed: true,
        newTask: false
      },
      {
        taskTitle: "Fix downtime issue",
        taskDescription: "Resolve crash issue",
        date: "2026-03-17",
        category: "DevOps",
        active: false,
        failed: true,
        completed: false,
        newTask: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    name: "Admin",
    email: "admin@123",
    password: "1234"
  }
];


export const setLocalStorage = () => {
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) || []
  const admin = JSON.parse(localStorage.getItem('admin')) || []
  return { employees, admin }
}
