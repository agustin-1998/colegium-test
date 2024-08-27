import { defineStore } from 'pinia'

export const useStudentsStore = defineStore('studentsStore', {
  state: () => ({
    students: [
      {
        id: 1,
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        name: 'John Doe',
        status: 'tarde',
        curso: 'Inglés'
      },
      {
        id: 2,
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        name: 'Jane Smith',
        status: 'presente-virtual',
        curso: 'Lengua'
      },
      {
        id: 3,
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        name: 'Michael Johnson',
        status: 'presente',
        curso: 'Historia'
      },
      {
        id: 4,
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
        name: 'Emily Davis',
        status: 'ausente',
        curso: 'Lengua'
      },
      {
        id: 5,
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        name: 'David Brown',
        status: 'presente',
        curso: 'Inglés'
      },
      {
        id: 6,
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
        name: 'Sarah Wilson',
        status: 'tarde',
        curso: 'Geografía'
      },
      {
        id: 7,
        image: 'https://randomuser.me/api/portraits/men/7.jpg',
        name: 'James Taylor',
        status: 'ausente',
        curso: 'Matemática'
      },
      {
        id: 8,
        image: 'https://randomuser.me/api/portraits/women/8.jpg',
        name: 'Laura Martinez',
        status: 'presente-virtual',
        curso: 'Educación fisica'
      },
      {
        id: 9,
        image: 'https://randomuser.me/api/portraits/men/9.jpg',
        name: 'Robert Anderson',
        status: 'presente',
        curso: 'Inglés'
      },
      {
        id: 10,
        image: 'https://randomuser.me/api/portraits/women/10.jpg',
        name: 'Linda Thomas',
        status: 'presente-virtual',
        curso: 'Matemática'
      }
    ]
  }),
  getters: {
    presente: (state) => {
      return state.students.filter((student) => student.status === 'presente').length
    },
    presenteVirtual: (state) => {
      return state.students.filter((student) => student.status === 'presente-virtual').length
    },
    ausente: (state) => {
      return state.students.filter((student) => student.status === 'ausente').length
    },
    tarde: (state) => {
      return state.students.filter((student) => student.status === 'tarde').length
    }
  },
  actions: {
    changeStatus({ id, status }) {
      const student = this.students.find((student) => student.id === id)
      student.status = status
    }
  },
  persist: true
})
