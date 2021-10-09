const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Profile Schema
const UserProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  wineId: {
    type: String,
    required: true,
    max: 30
  },
  tellMeAboutYourSelf: {
    type: String
  },
  occupation: {
    type: String
  },
  aadharCard: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
   intrestedDomains: {
    type: [String],
    required: true
  },
  additionalInformation: {
    type: String
  },
  nickName: {
    type: String
  },
  sportsInfo: [
    {
      sportsName: {
        type: String,
        required: true
      },
      typeOfSport: {
        type: String,
        required: true
      },
      pastPerformance: {
        type: []
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      additionalDetails: {
        type: String
      }
    }
  ],
  medicalInfo: [
    {
      title: {
        type: String,
        required: true
      },
      bloodGroup: {
        type: String,
        required: true
      },
      disease: {
        type: []
      },
      pastHistory: {
        type: []
      },
      additionalDetails: {
        type: String
      }
    }
  ],
  financialInfo: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  partyOrClubInfo: [
    {
      partyClubName: {
        type: String,
        required: true
      },
      typeOfEntertainment: {
        type: String,
        required: true
      },
      feedback: {
        type: []
      },
      additionalDetails: {
        type: String
      }
    }
  ],
  reviewRatings: [
    {
      gotWineFrom: {
        type: String,
        required: true
      },
      rating: {
        type: String,
        required: true
      },
      wineFromDomain: {
        type: String,
        required: true
      },
      review: {
        type: String
      },
      additionalDetails:{
        type: []
      }
    }
  ],

  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = UserProfile = mongoose.model('profile', UserProfileSchema);
