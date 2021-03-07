/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export enum PaidState {
  Unknown = "Unknown",
  InProgress = "InProgress",
  NeedsPayment = "NeedsPayment",
  Success = "Success",
}

export type ModelStringKeyConditionInput = {
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
}

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export type ModelDirectMessageFilterInput = {
  id?: ModelIDFilterInput | null
  content?: ModelStringFilterInput | null
  attachment?: ModelStringFilterInput | null
  attachmentName?: ModelStringFilterInput | null
  when?: ModelStringFilterInput | null
  recipients?: ModelStringFilterInput | null
  userId?: ModelIDFilterInput | null
  messageRoomID?: ModelIDFilterInput | null
  and?: Array<ModelDirectMessageFilterInput | null> | null
  or?: Array<ModelDirectMessageFilterInput | null> | null
  not?: ModelDirectMessageFilterInput | null
}

export type ModelIDFilterInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
}

export type ModelStringFilterInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
}

export type ModelMessageFilterInput = {
  id?: ModelIDFilterInput | null
  content?: ModelStringFilterInput | null
  when?: ModelStringFilterInput | null
  attachment?: ModelStringFilterInput | null
  attachmentName?: ModelStringFilterInput | null
  roomId?: ModelIDFilterInput | null
  userId?: ModelIDFilterInput | null
  postingAs?: ModelStringFilterInput | null
  owner?: ModelStringFilterInput | null
  and?: Array<ModelMessageFilterInput | null> | null
  or?: Array<ModelMessageFilterInput | null> | null
  not?: ModelMessageFilterInput | null
}

export type GetMessageQueryVariables = {
  id: string
}

export type GetMessageQuery = {
  getMessage: {
    __typename: "Message"
    attachment: string | null
    attachmentName: string | null
    author: {
      __typename: "User"
      aboutMeLong: string | null
      aboutMeShort: string | null
      createdAt: string
      currentRole: string | null
      currentScope: string | null
      denomination: string | null
      email: string | null
      family_name: string
      given_name: string
      hasPaidState: PaidState | null
      id: string
      interests: Array<string | null> | null
      joined: string | null
      mainUserGroup: string | null
      numberVolunteers: string | null
      orgDescription: string | null
      orgName: string | null
      orgSize: string | null
      orgType: string | null
      owner: string | null
      phone: string | null
      personality: string | null
      pplServed: string | null
      primaryOrganization: string | null
      profileState: string | null
      stripeCustomerID: string | null
      stripeSubscriptionID: string | null
      sundayAttendance: string | null
      updatedAt: string
    } | null
    content: string
    createdAt: string
    id: string
    owner: string | null
    postingAs: string | null
    roomId: string | null
    updatedAt: string
    userId: string | null
    when: string
    replies: {
      __typename: "ModelReplyConnection"
      items: Array<{
        __typename: "Reply"
        attachment: string | null
        attachmentName: string | null
        author: {
          __typename: "User"
          aboutMeLong: string | null
          aboutMeShort: string | null
          createdAt: string
          currentRole: string | null
          currentScope: string | null
          denomination: string | null
          email: string | null
          family_name: string
          given_name: string
          hasPaidState: PaidState | null
          id: string
          interests: Array<string | null> | null
          joined: string | null
          mainUserGroup: string | null
          numberVolunteers: string | null
          orgDescription: string | null
          orgName: string | null
          orgSize: string | null
          orgType: string | null
          owner: string | null
          personality: string | null
          phone: string | null
          pplServed: string | null
          primaryOrganization: string | null
          updatedAt: string
          sundayAttendance: string | null
          stripeCustomerID: string | null
          stripeSubscriptionID: string | null
          profileState: string | null
        } | null
        content: string
        createdAt: string
        id: string
        messageId: string
        parentReplyId: string
        updatedAt: string
        userId: string
        when: string
        roomId: string | null
      } | null> | null
    } | null
  } | null
}

export type DirectMessagesByRoomQueryVariables = {
  messageRoomID?: string | null
  when?: ModelStringKeyConditionInput | null
  sortDirection?: ModelSortDirection | null
  filter?: ModelDirectMessageFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type DirectMessagesByRoomQuery = {
  directMessagesByRoom: {
    __typename: "ModelDirectMessageConnection"
    items: Array<{
      __typename: "DirectMessage"
      id: string
      content: string | null
      attachment: string | null
      attachmentName: string | null
      when: string
      recipients: Array<string | null>
      userId: string
      replies: {
        __typename: "ModelDirectMessageReplyConnection"
        items: Array<{
          __typename: "DirectMessageReply"
          attachment: string | null
          attachmentName: string | null
          author: {
            __typename: "User"
            aboutMeLong: string | null
            aboutMeShort: string | null
            createdAt: string
            currentRole: string | null
            currentScope: string | null
            denomination: string | null
            email: string | null
            family_name: string
            given_name: string
            hasPaidState: PaidState | null
            id: string
            interests: Array<string | null> | null
            joined: string | null
            mainUserGroup: string | null
            numberVolunteers: string | null
            orgDescription: string | null
            orgName: string | null
            orgSize: string | null
            orgType: string | null
            owner: string | null
            personality: string | null
            phone: string | null
            pplServed: string | null
            primaryOrganization: string | null
            updatedAt: string
            sundayAttendance: string | null
            stripeCustomerID: string | null
            stripeSubscriptionID: string | null
            profileState: string | null
          } | null
          content: string
          createdAt: string
          id: string
          messageId: string
          parentReplyId: string
          updatedAt: string
          userId: string
          when: string
          messageRoomID: string | null
        } | null> | null
      } | null
      messageRoomID: string
      messageRoom: {
        __typename: "DirectMessageRoom"
        id: string
        name: string | null
        roomType: string | null
        createdAt: string
        updatedAt: string
      } | null
      createdAt: string
      updatedAt: string
      author: {
        __typename: "User"
        id: string
        given_name: string
        family_name: string
        email: string | null
        phone: string | null
        owner: string | null
        mainUserGroup: string | null
        stripeCustomerID: string | null
        stripeSubscriptionID: string | null
        hasPaidState: PaidState | null
        profileState: string | null
        aboutMeShort: string | null
        aboutMeLong: string | null
        interests: Array<string | null> | null
        currentRole: string | null
        currentScope: string | null
        personality: string | null
        orgName: string | null
        orgType: string | null
        orgSize: string | null
        denomination: string | null
        pplServed: string | null
        sundayAttendance: string | null
        numberVolunteers: string | null
        orgDescription: string | null
        joined: string | null
        primaryOrganization: string | null
        createdAt: string
        updatedAt: string
      } | null
    } | null> | null
    nextToken: string | null
  } | null
}

export type MessagesByRoomQueryVariables = {
  roomId?: string | null
  when?: ModelStringKeyConditionInput | null
  sortDirection?: ModelSortDirection | null
  filter?: ModelMessageFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type MessagesByRoomQuery = {
  messagesByRoom: {
    __typename: "ModelMessageConnection"
    nextToken: string | null
    items: Array<{
      __typename: "Message"
      attachment: string | null
      attachmentName: string | null
      author: {
        __typename: "User"
        aboutMeLong: string | null
        aboutMeShort: string | null
        createdAt: string
        currentRole: string | null
        currentScope: string | null
        denomination: string | null
        email: string | null
        family_name: string
        given_name: string
        hasPaidState: PaidState | null
        id: string
        interests: Array<string | null> | null
        joined: string | null
        mainUserGroup: string | null
        numberVolunteers: string | null
        orgDescription: string | null
        orgName: string | null
        orgSize: string | null
        orgType: string | null
        owner: string | null
        phone: string | null
        personality: string | null
        pplServed: string | null
        primaryOrganization: string | null
        profileState: string | null
        stripeCustomerID: string | null
        stripeSubscriptionID: string | null
        sundayAttendance: string | null
        updatedAt: string
      } | null
      content: string
      createdAt: string
      id: string
      owner: string | null
      postingAs: string | null
      roomId: string | null
      updatedAt: string
      userId: string | null
      when: string
      replies: {
        __typename: "ModelReplyConnection"
        items: Array<{
          __typename: "Reply"
          attachment: string | null
          attachmentName: string | null
          author: {
            __typename: "User"
            aboutMeLong: string | null
            aboutMeShort: string | null
            createdAt: string
            currentRole: string | null
            currentScope: string | null
            denomination: string | null
            email: string | null
            family_name: string
            given_name: string
            hasPaidState: PaidState | null
            id: string
            interests: Array<string | null> | null
            joined: string | null
            mainUserGroup: string | null
            numberVolunteers: string | null
            orgDescription: string | null
            orgName: string | null
            orgSize: string | null
            orgType: string | null
            owner: string | null
            personality: string | null
            phone: string | null
            pplServed: string | null
            primaryOrganization: string | null
            updatedAt: string
            sundayAttendance: string | null
            stripeCustomerID: string | null
            stripeSubscriptionID: string | null
            profileState: string | null
          } | null
          content: string
          createdAt: string
          id: string
          messageId: string
          parentReplyId: string
          updatedAt: string
          userId: string
          when: string
          roomId: string | null
        } | null> | null
      } | null
    } | null> | null
  } | null
}

export type OnCreateMessageByRoomIdSubscriptionVariables = {
  roomId: string
}

export type OnCreateMessageByRoomIdSubscription = {
  onCreateMessageByRoomId: {
    __typename: "Message"
    id: string
    content: string
    when: string
    attachment: string | null
    attachmentName: string | null
    roomId: string | null
    userId: string | null
    postingAs: string | null
    owner: string | null
    room: {
      __typename: "Group"
      id: string
      owner: string
      ownerOrgID: string
      ownerOrg: {
        __typename: "Organization"
        id: string
        orgName: string
        adminEmail: string | null
        phone: string | null
        admins: Array<string>
        superAdmin: string
        hasPaidState: string | null
        profileState: string | null
        address: string | null
        city: string | null
        province: string | null
        postalCode: string | null
        country: string | null
        aboutMeShort: string | null
        aboutMeLong: string | null
        orgType: string | null
        orgSize: string | null
        denomination: string | null
        pplServed: string | null
        sundayAttendance: string | null
        numberVolunteers: string | null
        orgDescription: string | null
        joined: string | null
        parentOrganizationId: string
        createdAt: string
        updatedAt: string
      } | null
      type: string
      name: string
      description: string
      memberCount: number | null
      members: {
        __typename: "ModelGroupMemberConnection"
        nextToken: string | null
      } | null
      image: string
      time: string | null
      lastUpdated: string | null
      location: string | null
      locationLatLong: {
        __typename: "LatLong"
        latitude: string | null
        longitude: string | null
        geocodeFull: string | null
        geocodeCity: string | null
        geocodeRegion: string | null
        randomLatitude: string | null
        randomLongitude: string | null
      } | null
      length: string | null
      effort: string | null
      cost: string | null
      promotionalText: string | null
      messages: {
        __typename: "ModelMessageConnection"
        nextToken: string | null
      } | null
      eventType: string | null
      eventUrl: string | null
      tz: string | null
      isSponsored: string | null
      createdAt: string
      updatedAt: string
      ownerUser: {
        __typename: "User"
        id: string
        given_name: string
        family_name: string
        email: string | null
        phone: string | null
        owner: string | null
        mainUserGroup: string | null
        stripeCustomerID: string | null
        stripeSubscriptionID: string | null
        hasPaidState: PaidState | null
        profileState: string | null
        aboutMeShort: string | null
        aboutMeLong: string | null
        interests: Array<string | null> | null
        currentRole: string | null
        currentScope: string | null
        personality: string | null
        orgName: string | null
        orgType: string | null
        orgSize: string | null
        denomination: string | null
        pplServed: string | null
        sundayAttendance: string | null
        numberVolunteers: string | null
        orgDescription: string | null
        joined: string | null
        primaryOrganization: string | null
        createdAt: string
        updatedAt: string
      } | null
    } | null
    replies: {
      __typename: "ModelReplyConnection"
      items: Array<{
        __typename: "Reply"
        id: string
        content: string
        when: string
        attachment: string | null
        attachmentName: string | null
        userId: string
        messageId: string
        parentReplyId: string
        createdAt: string
        updatedAt: string
        roomId: string | null
        author: {
          __typename: "User"
          id: string
          given_name: string
          family_name: string
          email: string | null
          phone: string | null
          owner: string | null
          mainUserGroup: string | null
          stripeCustomerID: string | null
          stripeSubscriptionID: string | null
          hasPaidState: PaidState | null
          profileState: string | null
          aboutMeShort: string | null
          aboutMeLong: string | null
          interests: Array<string | null> | null
          currentRole: string | null
          currentScope: string | null
          personality: string | null
          orgName: string | null
          orgType: string | null
          orgSize: string | null
          denomination: string | null
          pplServed: string | null
          sundayAttendance: string | null
          numberVolunteers: string | null
          orgDescription: string | null
          joined: string | null
          primaryOrganization: string | null
          createdAt: string
          updatedAt: string
        } | null
      } | null> | null
      nextToken: string | null
    } | null
    createdAt: string
    updatedAt: string
    author: {
      __typename: "User"
      id: string
      given_name: string
      family_name: string
      email: string | null
      phone: string | null
      owner: string | null
      mainUserGroup: string | null
      stripeCustomerID: string | null
      stripeSubscriptionID: string | null
      hasPaidState: PaidState | null
      profileState: string | null
      aboutMeShort: string | null
      aboutMeLong: string | null
      interests: Array<string | null> | null
      currentRole: string | null
      currentScope: string | null
      personality: string | null
      orgName: string | null
      orgType: string | null
      orgSize: string | null
      denomination: string | null
      pplServed: string | null
      sundayAttendance: string | null
      numberVolunteers: string | null
      orgDescription: string | null
      joined: string | null
      primaryOrganization: string | null
      createdAt: string
      updatedAt: string
    } | null
  } | null
}

export type OnCreateReplySubscription = {
  onCreateReply: {
    __typename: "Reply"
    id: string
    content: string
    when: string
    attachment: string | null
    attachmentName: string | null
    userId: string
    messageId: string
    roomId: string | null
    parentMessage: {
      __typename: "Message"
      roomId: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreateDirectMessageSubscription = {
  onCreateDirectMessage: {
    __typename: "DirectMessage"
    id: string
    content: string | null
    attachment: string | null
    attachmentName: string | null
    when: string
    recipients: Array<string | null>
    userId: string
    replies: {
      __typename: "ModelDirectMessageReplyConnection"
      items: Array<{
        __typename: "DirectMessageReply"
        id: string
        content: string
        when: string
        attachment: string | null
        attachmentName: string | null
        userId: string
        messageId: string
        messageRoomID: string | null
        parentReplyId: string
        createdAt: string
        updatedAt: string
      } | null> | null
      nextToken: string | null
    } | null
    messageRoomID: string
    messageRoom: {
      __typename: "DirectMessageRoom"
      id: string
      name: string | null
      messageUsers: {
        __typename: "ModelDirectMessageUserConnection"
        nextToken: string | null
      } | null
      directMessage: {
        __typename: "ModelDirectMessageConnection"
        nextToken: string | null
      } | null
      roomType: string | null
      createdAt: string
      updatedAt: string
    } | null
    createdAt: string
    updatedAt: string
    author: {
      __typename: "User"
      id: string
      given_name: string
      family_name: string
      email: string | null
      phone: string | null
      owner: string | null
      mainUserGroup: string | null
      stripeCustomerID: string | null
      stripeSubscriptionID: string | null
      hasPaidState: PaidState | null
      profileState: string | null
      billingAddress: {
        __typename: "Address"
        city: string | null
        country: string | null
        line1: string | null
        line2: string | null
        postal_code: string | null
        state: string | null
      } | null
      location: {
        __typename: "LatLong"
        latitude: string | null
        longitude: string | null
        geocodeFull: string | null
        geocodeCity: string | null
        geocodeRegion: string | null
        randomLatitude: string | null
        randomLongitude: string | null
      } | null
      profileImage: {
        __typename: "Image"
        userId: string | null
        filenameSmall: string | null
        filenameMedium: string | null
        filenameLarge: string | null
        filenameUpload: string | null
      } | null
      aboutMeShort: string | null
      aboutMeLong: string | null
      interests: Array<string | null> | null
      currentRole: string | null
      currentScope: string | null
      personality: string | null
      orgName: string | null
      orgType: string | null
      orgSize: string | null
      denomination: string | null
      pplServed: string | null
      sundayAttendance: string | null
      numberVolunteers: string | null
      orgDescription: string | null
      joined: string | null
      primaryOrganization: string | null
      organizations: {
        __typename: "ModelOrganizationMemberConnection"
        nextToken: string | null
      } | null
      owns: {
        __typename: "ModelGroupConnection"
        nextToken: string | null
      } | null
      groups: {
        __typename: "ModelGroupMemberConnection"
        nextToken: string | null
      } | null
      messages: {
        __typename: "ModelMessageConnection"
        nextToken: string | null
      } | null
      directMessages: {
        __typename: "ModelDirectMessageConnection"
        nextToken: string | null
      } | null
      messageReplies: {
        __typename: "ModelReplyConnection"
        nextToken: string | null
      } | null
      coachingTriad: {
        __typename: "ModelCourseTriadCoachesConnection"
        nextToken: string | null
      } | null
      userTriad: {
        __typename: "ModelCourseTriadUsersConnection"
        nextToken: string | null
      } | null
      courseInstructing: {
        __typename: "ModelCourseInstructorsConnection"
        nextToken: string | null
      } | null
      courseBackOfficeStaff: {
        __typename: "ModelCourseBackOfficeStaffConnection"
        nextToken: string | null
      } | null
      payments: {
        __typename: "ModelPaymentConnection"
        nextToken: string | null
      } | null
      alertConfig: {
        __typename: "AlertConfig"
        emailDirectMessage: string | null
        emailGroupMessage: string | null
        emailEventMessage: string | null
        emailOrgMessage: string | null
        emailResourceMessage: string | null
        emailCourseMessage: string | null
        emailPromotions: string | null
      } | null
      createdAt: string
      updatedAt: string
    } | null
  } | null
}

export type OnCreateDirectMessageReplySubscription = {
  onCreateDirectMessageReply: {
    __typename: "DirectMessageReply"
    id: string
    content: string
    when: string
    attachment: string | null
    attachmentName: string | null
    userId: string
    messageId: string
    parentMessage: {
      __typename: "DirectMessage"
      messageRoomID: string
    } | null
    messageRoomID: string | null
    parentReplyId: string
    createdAt: string
    updatedAt: string
  } | null
}

export type GetDirectMessageQueryVariables = {
  id: string
}

export type GetDirectMessageQuery = {
  getDirectMessage: {
    __typename: "DirectMessage"
    id: string
    content: string | null
    attachment: string | null
    attachmentName: string | null
    when: string
    recipients: Array<string | null>
    userId: string
    replies: {
      __typename: "ModelDirectMessageReplyConnection"
      items: Array<{
        __typename: "DirectMessageReply"
        attachment: string | null
        attachmentName: string | null
        author: {
          __typename: "User"
          aboutMeLong: string | null
          aboutMeShort: string | null
          createdAt: string
          currentRole: string | null
          currentScope: string | null
          denomination: string | null
          email: string | null
          family_name: string
          given_name: string
          hasPaidState: PaidState | null
          id: string
          interests: Array<string | null> | null
          joined: string | null
          mainUserGroup: string | null
          numberVolunteers: string | null
          orgDescription: string | null
          orgName: string | null
          orgSize: string | null
          orgType: string | null
          owner: string | null
          personality: string | null
          phone: string | null
          pplServed: string | null
          primaryOrganization: string | null
          updatedAt: string
          sundayAttendance: string | null
          stripeCustomerID: string | null
          stripeSubscriptionID: string | null
          profileState: string | null
        } | null
        content: string
        createdAt: string
        id: string
        messageId: string
        parentReplyId: string
        updatedAt: string
        userId: string
        when: string
        messageRoomID: string | null
      } | null> | null
    } | null
    messageRoomID: string
    messageRoom: {
      __typename: "DirectMessageRoom"
      id: string
      name: string | null
      messageUsers: {
        __typename: "ModelDirectMessageUserConnection"
        nextToken: string | null
      } | null
      directMessage: {
        __typename: "ModelDirectMessageConnection"
        nextToken: string | null
      } | null
      roomType: string | null
      createdAt: string
      updatedAt: string
    } | null
    createdAt: string
    updatedAt: string
    author: {
      __typename: "User"
      id: string
      given_name: string
      family_name: string
      email: string | null
      phone: string | null
      owner: string | null
      mainUserGroup: string | null
      stripeCustomerID: string | null
      stripeSubscriptionID: string | null
      hasPaidState: PaidState | null
      profileState: string | null
      aboutMeShort: string | null
      aboutMeLong: string | null
      interests: Array<string | null> | null
      currentRole: string | null
      currentScope: string | null
      personality: string | null
      orgName: string | null
      orgType: string | null
      orgSize: string | null
      denomination: string | null
      pplServed: string | null
      sundayAttendance: string | null
      numberVolunteers: string | null
      orgDescription: string | null
      joined: string | null
      primaryOrganization: string | null
      createdAt: string
      updatedAt: string
    } | null
  } | null
}
