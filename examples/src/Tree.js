import avatarPersonnel from './assets/avatar-personnel.svg'

export const tree = {
  id: 100,
  person: {
    id: 100,
    avatar: avatarPersonnel,
    name: 'Henry monger',
    title: 'Manager',
    reports: 3,
  },
  hasChild: true,
  hasParent: true,
  children: [],
}

export const tree1 = [
  {
    id: 36,
    person: {
      id: 36,
      avatar: avatarPersonnel,
      name: 'Tomasz polaski',
      title: 'IT Specialist',
      reports: 4,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 32,
    person: {
      id: 32,
      avatar: avatarPersonnel,
      name: 'Emanuel walker',
      title: 'IT Specialist',
      reporst: "",
    },
    hasChild: true,
    hasParent: true,
    children: [],
  },
  {
    id: 25,
    person: {
      id: 25,
      avatar: avatarPersonnel,
      name: 'Kerry peter',
      title: 'IT Specialist',
      reports: 3,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
]

export const tree2 = [
  {
    id: 56,
    person: {
      id: 56,
      avatar: avatarPersonnel,
      name: 'Sam John',
      title: 'HR',
      reports: 2,
      link: 'https://github.com/PeopleWeek/react-org-chart',
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 66,
    person: {
      id: 66,
      avatar: avatarPersonnel,
      name: 'John doe',
      title: 'Developer',
      reporst: "",
      link: 'https://github.com/PeopleWeek/react-org-chart',
    },
    hasChild: true,
    hasParent: true,
    children: [],
  },
  {
    id: 76,
    person: {
      id: 76,
      avatar: avatarPersonnel,
      name: 'Emilia rogers',
      title: 'Developer',
      reporst: "",
      link: 'https://github.com/PeopleWeek/react-org-chart',
    },
    hasChild: true,
    hasParent: true,
    children: [],
  },
  {
    id: 60,
    person: {
      id: 60,
      avatar: avatarPersonnel,
      name: 'Ellen cott',
      title: 'IT Officer',
      reporst: "",
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
]

export const tree3 = [
  {
    id: 70,
    person: {
      id: 70,
      avatar: avatarPersonnel,
      name: 'Kenneth dom',
      title: 'IT Officer',
      reporst: "",
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
  {
    id: 45,
    person: {
      id: 45,
      avatar: avatarPersonnel,
      name: 'Kin baker',
      title: 'IT Officer',
      reporst: "",
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
]

export const tree4 = [
  {
    id: 102,
    person: {
      id: 102,
      avatar: avatarPersonnel,
      name: 'Hendy kinger',
      title: 'Manager',
      reporst: "",
    },
    hasChild: true,
    hasParent: true,
    children: [],
  },
  {
    id: 455,
    person: {
      id: 455,
      avatar: avatarPersonnel,
      name: 'Kate baker',
      title: 'IT Officer',
      reporst: "",
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
  {
    id: 444,
    person: {
      id: 444,
      avatar: avatarPersonnel,
      name: 'John medis',
      title: 'IT Officer',
      reporst: "",
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },

  {
    id: 456,
    person: {
      id: 456,
      avatar: avatarPersonnel,
      name: 'Brett lee',
      title: 'IT Officer',
      reporst: "",
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
]
