export default function () {
  return {
    format: {
      type: String,
      default: 'YYYY-MM-DD HH:mm'
    },
    value: {
      type: String,
      default: null
    },
    minDate: {
      type: String,
      default: '2000-01-01 00:00'
    },
    maxDate: {
      type: String,
      default: '2099-12-31 23:59'
    },
    hourList: {
      type: Array,
      default: null
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    formatYear: {
      type: String,
      default: '{value}'
    },
    formatMonth: {
      type: String,
      default: '{value}'
    },
    formatDay: {
      type: String,
      default: '{value}'
    },
    formatHour: {
      type: String,
      default: '{value}'
    },
    formatMinute: {
      type: String,
      default: '{value}'
    }
  }
}
