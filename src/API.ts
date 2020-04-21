/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  given_name: string,
  family_name: string,
  email?: string | null,
  phone?: string | null,
  owner?: string | null,
  hasPaidState?: string | null,
  address?: string | null,
  city?: string | null,
  province?: string | null,
  postalCode?: string | null,
  country?: string | null,
  profileImage?: ImageInput | null,
  aboutMeShort?: string | null,
  aboutMeLong?: string | null,
  interests?: string | null,
  currentRole?: string | null,
  currentScope?: string | null,
  personality?: string | null,
  orgName?: string | null,
  orgType?: string | null,
  orgSize?: string | null,
  orgDescription?: string | null,
  joined?: string | null,
};

export type ImageInput = {
  userId?: string | null,
  filenameSmall?: string | null,
  filenameMedium?: string | null,
  filenameLarge?: string | null,
  filenameUpload?: string | null,
};

export type UpdateUserInput = {
  id: string,
  given_name?: string | null,
  family_name?: string | null,
  email?: string | null,
  phone?: string | null,
  owner?: string | null,
  hasPaidState?: string | null,
  address?: string | null,
  city?: string | null,
  province?: string | null,
  postalCode?: string | null,
  country?: string | null,
  profileImage?: ImageInput | null,
  aboutMeShort?: string | null,
  aboutMeLong?: string | null,
  interests?: string | null,
  currentRole?: string | null,
  currentScope?: string | null,
  personality?: string | null,
  orgName?: string | null,
  orgType?: string | null,
  orgSize?: string | null,
  orgDescription?: string | null,
  joined?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateGroupMemberInput = {
  id?: string | null,
  groupID?: string | null,
  userID?: string | null,
};

export type UpdateGroupMemberInput = {
  id: string,
  groupID?: string | null,
  userID?: string | null,
};

export type DeleteGroupMemberInput = {
  id?: string | null,
};

export type CreateGroupInput = {
  id?: string | null,
  owner: string,
  type: string,
  name: string,
  description: string,
  memberCount?: number | null,
  image: string,
  time?: string | null,
  lastUpdated?: string | null,
  location?: string | null,
  length?: string | null,
  effort?: string | null,
  cost?: string | null,
  eventType?: string | null,
  eventUrl?: string | null,
};

export type UpdateGroupInput = {
  id: string,
  owner?: string | null,
  type?: string | null,
  name?: string | null,
  description?: string | null,
  memberCount?: number | null,
  image?: string | null,
  time?: string | null,
  lastUpdated?: string | null,
  location?: string | null,
  length?: string | null,
  effort?: string | null,
  cost?: string | null,
  eventType?: string | null,
  eventUrl?: string | null,
};

export type DeleteGroupInput = {
  id?: string | null,
};

export type CreateCourseInfoInput = {
  id?: string | null,
  designedBy?: string | null,
  summary?: Array< string | null > | null,
  subTitle?: string | null,
  introduction?: Array< string | null > | null,
};

export type UpdateCourseInfoInput = {
  id: string,
  designedBy?: string | null,
  summary?: Array< string | null > | null,
  subTitle?: string | null,
  introduction?: Array< string | null > | null,
};

export type DeleteCourseInfoInput = {
  id?: string | null,
};

export type CreateCourseWeekInput = {
  id?: string | null,
  week?: string | null,
  date?: string | null,
  name?: string | null,
  leader?: string | null,
  courseInfoCourseDetailsId?: string | null,
};

export type UpdateCourseWeekInput = {
  id: string,
  week?: string | null,
  date?: string | null,
  name?: string | null,
  leader?: string | null,
  courseInfoCourseDetailsId?: string | null,
};

export type DeleteCourseWeekInput = {
  id?: string | null,
};

export type CreateCourseLessonInput = {
  id?: string | null,
  name?: string | null,
  time?: string | null,
  description?: Array< string | null > | null,
  courseWeekLessonsId?: string | null,
};

export type UpdateCourseLessonInput = {
  id: string,
  name?: string | null,
  time?: string | null,
  description?: Array< string | null > | null,
  courseWeekLessonsId?: string | null,
};

export type DeleteCourseLessonInput = {
  id?: string | null,
};

export type CreateCourseAssignmentInput = {
  id?: string | null,
  due?: string | null,
  description?: string | null,
  courseLessonAssignmentId?: string | null,
};

export type UpdateCourseAssignmentInput = {
  id: string,
  due?: string | null,
  description?: string | null,
  courseLessonAssignmentId?: string | null,
};

export type DeleteCourseAssignmentInput = {
  id?: string | null,
};

export type CreateMessageInput = {
  id?: string | null,
  content: string,
  when: string,
  roomId?: string | null,
  userId?: string | null,
  owner?: string | null,
};

export type UpdateMessageInput = {
  id: string,
  content?: string | null,
  when?: string | null,
  roomId?: string | null,
  userId?: string | null,
  owner?: string | null,
};

export type DeleteMessageInput = {
  id?: string | null,
};

export type CreateResourceRootInput = {
  id?: string | null,
  type?: string | null,
};

export type UpdateResourceRootInput = {
  id: string,
  type?: string | null,
};

export type DeleteResourceRootInput = {
  id?: string | null,
};

export type CreateResourceInput = {
  id?: string | null,
  type?: string | null,
  menuTitle?: string | null,
  title?: string | null,
  image?: ImageInput | null,
  description?: string | null,
  extendedDescription?: string | null,
  resourceRootId?: string | null,
};

export type UpdateResourceInput = {
  id: string,
  type?: string | null,
  menuTitle?: string | null,
  title?: string | null,
  image?: ImageInput | null,
  description?: string | null,
  extendedDescription?: string | null,
  resourceRootId?: string | null,
};

export type DeleteResourceInput = {
  id?: string | null,
};

export type CreateResourceSeriesInput = {
  id?: string | null,
  type?: string | null,
  title?: string | null,
  description?: string | null,
  image?: string | null,
  category?: Array< string | null > | null,
  status?: string | null,
  allFiles?: string | null,
  playlist?: string | null,
  playlistImage?: string | null,
  resourceSeriesResourceId?: string | null,
};

export type UpdateResourceSeriesInput = {
  id: string,
  type?: string | null,
  title?: string | null,
  description?: string | null,
  image?: string | null,
  category?: Array< string | null > | null,
  status?: string | null,
  allFiles?: string | null,
  playlist?: string | null,
  playlistImage?: string | null,
  resourceSeriesResourceId?: string | null,
};

export type DeleteResourceSeriesInput = {
  id?: string | null,
};

export type CreateResourceEpisodeInput = {
  id?: string | null,
  episodeNumber?: number | null,
  type?: string | null,
  title?: string | null,
  description?: string | null,
  videoPreview?: string | null,
  videoLowRes?: string | null,
  videoHiRes?: string | null,
  lessonPlan?: string | null,
  activityPage?: string | null,
  resourceEpisodeSeriesId?: string | null,
};

export type UpdateResourceEpisodeInput = {
  id: string,
  episodeNumber?: number | null,
  type?: string | null,
  title?: string | null,
  description?: string | null,
  videoPreview?: string | null,
  videoLowRes?: string | null,
  videoHiRes?: string | null,
  lessonPlan?: string | null,
  activityPage?: string | null,
  resourceEpisodeSeriesId?: string | null,
};

export type DeleteResourceEpisodeInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null,
  given_name?: ModelStringFilterInput | null,
  family_name?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  phone?: ModelStringFilterInput | null,
  owner?: ModelStringFilterInput | null,
  hasPaidState?: ModelStringFilterInput | null,
  address?: ModelStringFilterInput | null,
  city?: ModelStringFilterInput | null,
  province?: ModelStringFilterInput | null,
  postalCode?: ModelStringFilterInput | null,
  country?: ModelStringFilterInput | null,
  aboutMeShort?: ModelStringFilterInput | null,
  aboutMeLong?: ModelStringFilterInput | null,
  interests?: ModelStringFilterInput | null,
  currentRole?: ModelStringFilterInput | null,
  currentScope?: ModelStringFilterInput | null,
  personality?: ModelStringFilterInput | null,
  orgName?: ModelStringFilterInput | null,
  orgType?: ModelStringFilterInput | null,
  orgSize?: ModelStringFilterInput | null,
  orgDescription?: ModelStringFilterInput | null,
  joined?: ModelStringFilterInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelGroupFilterInput = {
  id?: ModelIDFilterInput | null,
  owner?: ModelStringFilterInput | null,
  type?: ModelStringFilterInput | null,
  name?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  memberCount?: ModelIntFilterInput | null,
  image?: ModelStringFilterInput | null,
  time?: ModelStringFilterInput | null,
  lastUpdated?: ModelStringFilterInput | null,
  location?: ModelStringFilterInput | null,
  length?: ModelStringFilterInput | null,
  effort?: ModelStringFilterInput | null,
  cost?: ModelStringFilterInput | null,
  eventType?: ModelStringFilterInput | null,
  eventUrl?: ModelStringFilterInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelCourseInfoFilterInput = {
  id?: ModelIDFilterInput | null,
  designedBy?: ModelStringFilterInput | null,
  summary?: ModelStringFilterInput | null,
  subTitle?: ModelStringFilterInput | null,
  introduction?: ModelStringFilterInput | null,
  and?: Array< ModelCourseInfoFilterInput | null > | null,
  or?: Array< ModelCourseInfoFilterInput | null > | null,
  not?: ModelCourseInfoFilterInput | null,
};

export type ModelCourseWeekFilterInput = {
  id?: ModelIDFilterInput | null,
  week?: ModelStringFilterInput | null,
  date?: ModelStringFilterInput | null,
  name?: ModelStringFilterInput | null,
  leader?: ModelStringFilterInput | null,
  and?: Array< ModelCourseWeekFilterInput | null > | null,
  or?: Array< ModelCourseWeekFilterInput | null > | null,
  not?: ModelCourseWeekFilterInput | null,
};

export type ModelCourseLessonFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  time?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelCourseLessonFilterInput | null > | null,
  or?: Array< ModelCourseLessonFilterInput | null > | null,
  not?: ModelCourseLessonFilterInput | null,
};

export type ModelCourseAssignmentFilterInput = {
  id?: ModelIDFilterInput | null,
  due?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelCourseAssignmentFilterInput | null > | null,
  or?: Array< ModelCourseAssignmentFilterInput | null > | null,
  not?: ModelCourseAssignmentFilterInput | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDFilterInput | null,
  content?: ModelStringFilterInput | null,
  when?: ModelStringFilterInput | null,
  roomId?: ModelIDFilterInput | null,
  userId?: ModelIDFilterInput | null,
  owner?: ModelStringFilterInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelResourceRootFilterInput = {
  id?: ModelIDFilterInput | null,
  type?: ModelStringFilterInput | null,
  and?: Array< ModelResourceRootFilterInput | null > | null,
  or?: Array< ModelResourceRootFilterInput | null > | null,
  not?: ModelResourceRootFilterInput | null,
};

export type ModelResourceFilterInput = {
  id?: ModelIDFilterInput | null,
  type?: ModelStringFilterInput | null,
  menuTitle?: ModelStringFilterInput | null,
  title?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  extendedDescription?: ModelStringFilterInput | null,
  and?: Array< ModelResourceFilterInput | null > | null,
  or?: Array< ModelResourceFilterInput | null > | null,
  not?: ModelResourceFilterInput | null,
};

export type ModelResourceSeriesFilterInput = {
  id?: ModelIDFilterInput | null,
  type?: ModelStringFilterInput | null,
  title?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  image?: ModelStringFilterInput | null,
  category?: ModelStringFilterInput | null,
  status?: ModelStringFilterInput | null,
  allFiles?: ModelStringFilterInput | null,
  playlist?: ModelStringFilterInput | null,
  playlistImage?: ModelStringFilterInput | null,
  and?: Array< ModelResourceSeriesFilterInput | null > | null,
  or?: Array< ModelResourceSeriesFilterInput | null > | null,
  not?: ModelResourceSeriesFilterInput | null,
};

export type ModelResourceEpisodeFilterInput = {
  id?: ModelIDFilterInput | null,
  episodeNumber?: ModelIntFilterInput | null,
  type?: ModelStringFilterInput | null,
  title?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  videoPreview?: ModelStringFilterInput | null,
  videoLowRes?: ModelStringFilterInput | null,
  videoHiRes?: ModelStringFilterInput | null,
  lessonPlan?: ModelStringFilterInput | null,
  activityPage?: ModelStringFilterInput | null,
  and?: Array< ModelResourceEpisodeFilterInput | null > | null,
  or?: Array< ModelResourceEpisodeFilterInput | null > | null,
  not?: ModelResourceEpisodeFilterInput | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type SearchableGroupFilterInput = {
  id?: SearchableIDFilterInput | null,
  owner?: SearchableStringFilterInput | null,
  type?: SearchableStringFilterInput | null,
  name?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  memberCount?: SearchableIntFilterInput | null,
  image?: SearchableStringFilterInput | null,
  time?: SearchableStringFilterInput | null,
  lastUpdated?: SearchableStringFilterInput | null,
  location?: SearchableStringFilterInput | null,
  length?: SearchableStringFilterInput | null,
  effort?: SearchableStringFilterInput | null,
  cost?: SearchableStringFilterInput | null,
  eventType?: SearchableStringFilterInput | null,
  eventUrl?: SearchableStringFilterInput | null,
  and?: Array< SearchableGroupFilterInput | null > | null,
  or?: Array< SearchableGroupFilterInput | null > | null,
  not?: SearchableGroupFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableGroupSortInput = {
  field?: SearchableGroupSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableGroupSortableFields {
  id = "id",
  owner = "owner",
  type = "type",
  name = "name",
  description = "description",
  memberCount = "memberCount",
  image = "image",
  time = "time",
  lastUpdated = "lastUpdated",
  location = "location",
  length = "length",
  effort = "effort",
  cost = "cost",
  eventType = "eventType",
  eventUrl = "eventUrl",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    given_name: string,
    family_name: string,
    email: string | null,
    phone: string | null,
    owner: string | null,
    hasPaidState: string | null,
    address: string | null,
    city: string | null,
    province: string | null,
    postalCode: string | null,
    country: string | null,
    profileImage:  {
      __typename: "Image",
      userId: string | null,
      filenameSmall: string | null,
      filenameMedium: string | null,
      filenameLarge: string | null,
      filenameUpload: string | null,
    } | null,
    aboutMeShort: string | null,
    aboutMeLong: string | null,
    interests: string | null,
    currentRole: string | null,
    currentScope: string | null,
    personality: string | null,
    orgName: string | null,
    orgType: string | null,
    orgSize: string | null,
    orgDescription: string | null,
    joined: string | null,
    owns:  {
      __typename: "ModelGroupConnection",
      items:  Array< {
        __typename: "Group",
        id: string,
        owner: string,
        type: string,
        name: string,
        description: string,
        memberCount: number | null,
        image: string,
        time: string | null,
        lastUpdated: string | null,
        location: string | null,
        length: string | null,
        effort: string | null,
        cost: string | null,
        eventType: string | null,
        eventUrl: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    groups:  {
      __typename: "ModelGroupMemberConnection",
      items:  Array< {
        __typename: "GroupMember",
        id: string,
        groupID: string | null,
        userID: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
        userId: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    given_name: string,
    family_name: string,
    email: string | null,
    phone: string | null,
    owner: string | null,
    hasPaidState: string | null,
    address: string | null,
    city: string | null,
    province: string | null,
    postalCode: string | null,
    country: string | null,
    profileImage:  {
      __typename: "Image",
      userId: string | null,
      filenameSmall: string | null,
      filenameMedium: string | null,
      filenameLarge: string | null,
      filenameUpload: string | null,
    } | null,
    aboutMeShort: string | null,
    aboutMeLong: string | null,
    interests: string | null,
    currentRole: string | null,
    currentScope: string | null,
    personality: string | null,
    orgName: string | null,
    orgType: string | null,
    orgSize: string | null,
    orgDescription: string | null,
    joined: string | null,
    owns:  {
      __typename: "ModelGroupConnection",
      items:  Array< {
        __typename: "Group",
        id: string,
        owner: string,
        type: string,
        name: string,
        description: string,
        memberCount: number | null,
        image: string,
        time: string | null,
        lastUpdated: string | null,
        location: string | null,
        length: string | null,
        effort: string | null,
        cost: string | null,
        eventType: string | null,
        eventUrl: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    groups:  {
      __typename: "ModelGroupMemberConnection",
      items:  Array< {
        __typename: "GroupMember",
        id: string,
        groupID: string | null,
        userID: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
        userId: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    given_name: string,
    family_name: string,
    email: string | null,
    phone: string | null,
    owner: string | null,
    hasPaidState: string | null,
    address: string | null,
    city: string | null,
    province: string | null,
    postalCode: string | null,
    country: string | null,
    profileImage:  {
      __typename: "Image",
      userId: string | null,
      filenameSmall: string | null,
      filenameMedium: string | null,
      filenameLarge: string | null,
      filenameUpload: string | null,
    } | null,
    aboutMeShort: string | null,
    aboutMeLong: string | null,
    interests: string | null,
    currentRole: string | null,
    currentScope: string | null,
    personality: string | null,
    orgName: string | null,
    orgType: string | null,
    orgSize: string | null,
    orgDescription: string | null,
    joined: string | null,
    owns:  {
      __typename: "ModelGroupConnection",
      items:  Array< {
        __typename: "Group",
        id: string,
        owner: string,
        type: string,
        name: string,
        description: string,
        memberCount: number | null,
        image: string,
        time: string | null,
        lastUpdated: string | null,
        location: string | null,
        length: string | null,
        effort: string | null,
        cost: string | null,
        eventType: string | null,
        eventUrl: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    groups:  {
      __typename: "ModelGroupMemberConnection",
      items:  Array< {
        __typename: "GroupMember",
        id: string,
        groupID: string | null,
        userID: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
        userId: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateGroupMemberMutationVariables = {
  input: CreateGroupMemberInput,
};

export type CreateGroupMemberMutation = {
  createGroupMember:  {
    __typename: "GroupMember",
    id: string,
    groupID: string | null,
    userID: string | null,
    group:  {
      __typename: "Group",
      id: string,
      owner: string,
      ownerUser:  {
        __typename: "User",
        id: string,
        given_name: string,
        family_name: string,
        email: string | null,
        phone: string | null,
        owner: string | null,
        hasPaidState: string | null,
        address: string | null,
        city: string | null,
        province: string | null,
        postalCode: string | null,
        country: string | null,
        aboutMeShort: string | null,
        aboutMeLong: string | null,
        interests: string | null,
        currentRole: string | null,
        currentScope: string | null,
        personality: string | null,
        orgName: string | null,
        orgType: string | null,
        orgSize: string | null,
        orgDescription: string | null,
        joined: string | null,
      } | null,
      type: string,
      name: string,
      description: string,
      memberCount: number | null,
      members:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      image: string,
      time: string | null,
      lastUpdated: string | null,
      location: string | null,
      length: string | null,
      effort: string | null,
      cost: string | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      eventType: string | null,
      eventUrl: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      given_name: string,
      family_name: string,
      email: string | null,
      phone: string | null,
      owner: string | null,
      hasPaidState: string | null,
      address: string | null,
      city: string | null,
      province: string | null,
      postalCode: string | null,
      country: string | null,
      profileImage:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      aboutMeShort: string | null,
      aboutMeLong: string | null,
      interests: string | null,
      currentRole: string | null,
      currentScope: string | null,
      personality: string | null,
      orgName: string | null,
      orgType: string | null,
      orgSize: string | null,
      orgDescription: string | null,
      joined: string | null,
      owns:  {
        __typename: "ModelGroupConnection",
        nextToken: string | null,
      } | null,
      groups:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateGroupMemberMutationVariables = {
  input: UpdateGroupMemberInput,
};

export type UpdateGroupMemberMutation = {
  updateGroupMember:  {
    __typename: "GroupMember",
    id: string,
    groupID: string | null,
    userID: string | null,
    group:  {
      __typename: "Group",
      id: string,
      owner: string,
      ownerUser:  {
        __typename: "User",
        id: string,
        given_name: string,
        family_name: string,
        email: string | null,
        phone: string | null,
        owner: string | null,
        hasPaidState: string | null,
        address: string | null,
        city: string | null,
        province: string | null,
        postalCode: string | null,
        country: string | null,
        aboutMeShort: string | null,
        aboutMeLong: string | null,
        interests: string | null,
        currentRole: string | null,
        currentScope: string | null,
        personality: string | null,
        orgName: string | null,
        orgType: string | null,
        orgSize: string | null,
        orgDescription: string | null,
        joined: string | null,
      } | null,
      type: string,
      name: string,
      description: string,
      memberCount: number | null,
      members:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      image: string,
      time: string | null,
      lastUpdated: string | null,
      location: string | null,
      length: string | null,
      effort: string | null,
      cost: string | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      eventType: string | null,
      eventUrl: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      given_name: string,
      family_name: string,
      email: string | null,
      phone: string | null,
      owner: string | null,
      hasPaidState: string | null,
      address: string | null,
      city: string | null,
      province: string | null,
      postalCode: string | null,
      country: string | null,
      profileImage:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      aboutMeShort: string | null,
      aboutMeLong: string | null,
      interests: string | null,
      currentRole: string | null,
      currentScope: string | null,
      personality: string | null,
      orgName: string | null,
      orgType: string | null,
      orgSize: string | null,
      orgDescription: string | null,
      joined: string | null,
      owns:  {
        __typename: "ModelGroupConnection",
        nextToken: string | null,
      } | null,
      groups:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteGroupMemberMutationVariables = {
  input: DeleteGroupMemberInput,
};

export type DeleteGroupMemberMutation = {
  deleteGroupMember:  {
    __typename: "GroupMember",
    id: string,
    groupID: string | null,
    userID: string | null,
    group:  {
      __typename: "Group",
      id: string,
      owner: string,
      ownerUser:  {
        __typename: "User",
        id: string,
        given_name: string,
        family_name: string,
        email: string | null,
        phone: string | null,
        owner: string | null,
        hasPaidState: string | null,
        address: string | null,
        city: string | null,
        province: string | null,
        postalCode: string | null,
        country: string | null,
        aboutMeShort: string | null,
        aboutMeLong: string | null,
        interests: string | null,
        currentRole: string | null,
        currentScope: string | null,
        personality: string | null,
        orgName: string | null,
        orgType: string | null,
        orgSize: string | null,
        orgDescription: string | null,
        joined: string | null,
      } | null,
      type: string,
      name: string,
      description: string,
      memberCount: number | null,
      members:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      image: string,
      time: string | null,
      lastUpdated: string | null,
      location: string | null,
      length: string | null,
      effort: string | null,
      cost: string | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      eventType: string | null,
      eventUrl: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      given_name: string,
      family_name: string,
      email: string | null,
      phone: string | null,
      owner: string | null,
      hasPaidState: string | null,
      address: string | null,
      city: string | null,
      province: string | null,
      postalCode: string | null,
      country: string | null,
      profileImage:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      aboutMeShort: string | null,
      aboutMeLong: string | null,
      interests: string | null,
      currentRole: string | null,
      currentScope: string | null,
      personality: string | null,
      orgName: string | null,
      orgType: string | null,
      orgSize: string | null,
      orgDescription: string | null,
      joined: string | null,
      owns:  {
        __typename: "ModelGroupConnection",
        nextToken: string | null,
      } | null,
      groups:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
};

export type CreateGroupMutation = {
  createGroup:  {
    __typename: "Group",
    id: string,
    owner: string,
    ownerUser:  {
      __typename: "User",
      id: string,
      given_name: string,
      family_name: string,
      email: string | null,
      phone: string | null,
      owner: string | null,
      hasPaidState: string | null,
      address: string | null,
      city: string | null,
      province: string | null,
      postalCode: string | null,
      country: string | null,
      profileImage:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      aboutMeShort: string | null,
      aboutMeLong: string | null,
      interests: string | null,
      currentRole: string | null,
      currentScope: string | null,
      personality: string | null,
      orgName: string | null,
      orgType: string | null,
      orgSize: string | null,
      orgDescription: string | null,
      joined: string | null,
      owns:  {
        __typename: "ModelGroupConnection",
        nextToken: string | null,
      } | null,
      groups:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
    type: string,
    name: string,
    description: string,
    memberCount: number | null,
    members:  {
      __typename: "ModelGroupMemberConnection",
      items:  Array< {
        __typename: "GroupMember",
        id: string,
        groupID: string | null,
        userID: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image: string,
    time: string | null,
    lastUpdated: string | null,
    location: string | null,
    length: string | null,
    effort: string | null,
    cost: string | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
        userId: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    eventType: string | null,
    eventUrl: string | null,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
};

export type UpdateGroupMutation = {
  updateGroup:  {
    __typename: "Group",
    id: string,
    owner: string,
    ownerUser:  {
      __typename: "User",
      id: string,
      given_name: string,
      family_name: string,
      email: string | null,
      phone: string | null,
      owner: string | null,
      hasPaidState: string | null,
      address: string | null,
      city: string | null,
      province: string | null,
      postalCode: string | null,
      country: string | null,
      profileImage:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      aboutMeShort: string | null,
      aboutMeLong: string | null,
      interests: string | null,
      currentRole: string | null,
      currentScope: string | null,
      personality: string | null,
      orgName: string | null,
      orgType: string | null,
      orgSize: string | null,
      orgDescription: string | null,
      joined: string | null,
      owns:  {
        __typename: "ModelGroupConnection",
        nextToken: string | null,
      } | null,
      groups:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
    type: string,
    name: string,
    description: string,
    memberCount: number | null,
    members:  {
      __typename: "ModelGroupMemberConnection",
      items:  Array< {
        __typename: "GroupMember",
        id: string,
        groupID: string | null,
        userID: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image: string,
    time: string | null,
    lastUpdated: string | null,
    location: string | null,
    length: string | null,
    effort: string | null,
    cost: string | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
        userId: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    eventType: string | null,
    eventUrl: string | null,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
};

export type DeleteGroupMutation = {
  deleteGroup:  {
    __typename: "Group",
    id: string,
    owner: string,
    ownerUser:  {
      __typename: "User",
      id: string,
      given_name: string,
      family_name: string,
      email: string | null,
      phone: string | null,
      owner: string | null,
      hasPaidState: string | null,
      address: string | null,
      city: string | null,
      province: string | null,
      postalCode: string | null,
      country: string | null,
      profileImage:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      aboutMeShort: string | null,
      aboutMeLong: string | null,
      interests: string | null,
      currentRole: string | null,
      currentScope: string | null,
      personality: string | null,
      orgName: string | null,
      orgType: string | null,
      orgSize: string | null,
      orgDescription: string | null,
      joined: string | null,
      owns:  {
        __typename: "ModelGroupConnection",
        nextToken: string | null,
      } | null,
      groups:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
    type: string,
    name: string,
    description: string,
    memberCount: number | null,
    members:  {
      __typename: "ModelGroupMemberConnection",
      items:  Array< {
        __typename: "GroupMember",
        id: string,
        groupID: string | null,
        userID: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image: string,
    time: string | null,
    lastUpdated: string | null,
    location: string | null,
    length: string | null,
    effort: string | null,
    cost: string | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
        userId: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    eventType: string | null,
    eventUrl: string | null,
  } | null,
};

export type CreateCourseInfoMutationVariables = {
  input: CreateCourseInfoInput,
};

export type CreateCourseInfoMutation = {
  createCourseInfo:  {
    __typename: "CourseInfo",
    id: string,
    designedBy: string | null,
    summary: Array< string | null > | null,
    courseDetails:  {
      __typename: "ModelCourseWeekConnection",
      items:  Array< {
        __typename: "CourseWeek",
        id: string,
        week: string | null,
        date: string | null,
        name: string | null,
        leader: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subTitle: string | null,
    introduction: Array< string | null > | null,
  } | null,
};

export type UpdateCourseInfoMutationVariables = {
  input: UpdateCourseInfoInput,
};

export type UpdateCourseInfoMutation = {
  updateCourseInfo:  {
    __typename: "CourseInfo",
    id: string,
    designedBy: string | null,
    summary: Array< string | null > | null,
    courseDetails:  {
      __typename: "ModelCourseWeekConnection",
      items:  Array< {
        __typename: "CourseWeek",
        id: string,
        week: string | null,
        date: string | null,
        name: string | null,
        leader: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subTitle: string | null,
    introduction: Array< string | null > | null,
  } | null,
};

export type DeleteCourseInfoMutationVariables = {
  input: DeleteCourseInfoInput,
};

export type DeleteCourseInfoMutation = {
  deleteCourseInfo:  {
    __typename: "CourseInfo",
    id: string,
    designedBy: string | null,
    summary: Array< string | null > | null,
    courseDetails:  {
      __typename: "ModelCourseWeekConnection",
      items:  Array< {
        __typename: "CourseWeek",
        id: string,
        week: string | null,
        date: string | null,
        name: string | null,
        leader: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subTitle: string | null,
    introduction: Array< string | null > | null,
  } | null,
};

export type CreateCourseWeekMutationVariables = {
  input: CreateCourseWeekInput,
};

export type CreateCourseWeekMutation = {
  createCourseWeek:  {
    __typename: "CourseWeek",
    id: string,
    week: string | null,
    date: string | null,
    name: string | null,
    leader: string | null,
    lessons:  {
      __typename: "ModelCourseLessonConnection",
      items:  Array< {
        __typename: "CourseLesson",
        id: string,
        name: string | null,
        time: string | null,
        description: Array< string | null > | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateCourseWeekMutationVariables = {
  input: UpdateCourseWeekInput,
};

export type UpdateCourseWeekMutation = {
  updateCourseWeek:  {
    __typename: "CourseWeek",
    id: string,
    week: string | null,
    date: string | null,
    name: string | null,
    leader: string | null,
    lessons:  {
      __typename: "ModelCourseLessonConnection",
      items:  Array< {
        __typename: "CourseLesson",
        id: string,
        name: string | null,
        time: string | null,
        description: Array< string | null > | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteCourseWeekMutationVariables = {
  input: DeleteCourseWeekInput,
};

export type DeleteCourseWeekMutation = {
  deleteCourseWeek:  {
    __typename: "CourseWeek",
    id: string,
    week: string | null,
    date: string | null,
    name: string | null,
    leader: string | null,
    lessons:  {
      __typename: "ModelCourseLessonConnection",
      items:  Array< {
        __typename: "CourseLesson",
        id: string,
        name: string | null,
        time: string | null,
        description: Array< string | null > | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateCourseLessonMutationVariables = {
  input: CreateCourseLessonInput,
};

export type CreateCourseLessonMutation = {
  createCourseLesson:  {
    __typename: "CourseLesson",
    id: string,
    name: string | null,
    time: string | null,
    description: Array< string | null > | null,
    assignment:  {
      __typename: "ModelCourseAssignmentConnection",
      items:  Array< {
        __typename: "CourseAssignment",
        id: string,
        due: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateCourseLessonMutationVariables = {
  input: UpdateCourseLessonInput,
};

export type UpdateCourseLessonMutation = {
  updateCourseLesson:  {
    __typename: "CourseLesson",
    id: string,
    name: string | null,
    time: string | null,
    description: Array< string | null > | null,
    assignment:  {
      __typename: "ModelCourseAssignmentConnection",
      items:  Array< {
        __typename: "CourseAssignment",
        id: string,
        due: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteCourseLessonMutationVariables = {
  input: DeleteCourseLessonInput,
};

export type DeleteCourseLessonMutation = {
  deleteCourseLesson:  {
    __typename: "CourseLesson",
    id: string,
    name: string | null,
    time: string | null,
    description: Array< string | null > | null,
    assignment:  {
      __typename: "ModelCourseAssignmentConnection",
      items:  Array< {
        __typename: "CourseAssignment",
        id: string,
        due: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateCourseAssignmentMutationVariables = {
  input: CreateCourseAssignmentInput,
};

export type CreateCourseAssignmentMutation = {
  createCourseAssignment:  {
    __typename: "CourseAssignment",
    id: string,
    due: string | null,
    description: string | null,
  } | null,
};

export type UpdateCourseAssignmentMutationVariables = {
  input: UpdateCourseAssignmentInput,
};

export type UpdateCourseAssignmentMutation = {
  updateCourseAssignment:  {
    __typename: "CourseAssignment",
    id: string,
    due: string | null,
    description: string | null,
  } | null,
};

export type DeleteCourseAssignmentMutationVariables = {
  input: DeleteCourseAssignmentInput,
};

export type DeleteCourseAssignmentMutation = {
  deleteCourseAssignment:  {
    __typename: "CourseAssignment",
    id: string,
    due: string | null,
    description: string | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
};

export type CreateMessageMutation = {
  createMessage:  {
    __typename: "Message",
    id: string,
    content: string,
    when: string,
    roomId: string | null,
    userId: string | null,
    owner: string | null,
    author:  {
      __typename: "User",
      id: string,
      given_name: string,
      family_name: string,
      email: string | null,
      phone: string | null,
      owner: string | null,
      hasPaidState: string | null,
      address: string | null,
      city: string | null,
      province: string | null,
      postalCode: string | null,
      country: string | null,
      profileImage:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      aboutMeShort: string | null,
      aboutMeLong: string | null,
      interests: string | null,
      currentRole: string | null,
      currentScope: string | null,
      personality: string | null,
      orgName: string | null,
      orgType: string | null,
      orgSize: string | null,
      orgDescription: string | null,
      joined: string | null,
      owns:  {
        __typename: "ModelGroupConnection",
        nextToken: string | null,
      } | null,
      groups:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
    room:  {
      __typename: "Group",
      id: string,
      owner: string,
      ownerUser:  {
        __typename: "User",
        id: string,
        given_name: string,
        family_name: string,
        email: string | null,
        phone: string | null,
        owner: string | null,
        hasPaidState: string | null,
        address: string | null,
        city: string | null,
        province: string | null,
        postalCode: string | null,
        country: string | null,
        aboutMeShort: string | null,
        aboutMeLong: string | null,
        interests: string | null,
        currentRole: string | null,
        currentScope: string | null,
        personality: string | null,
        orgName: string | null,
        orgType: string | null,
        orgSize: string | null,
        orgDescription: string | null,
        joined: string | null,
      } | null,
      type: string,
      name: string,
      description: string,
      memberCount: number | null,
      members:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      image: string,
      time: string | null,
      lastUpdated: string | null,
      location: string | null,
      length: string | null,
      effort: string | null,
      cost: string | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      eventType: string | null,
      eventUrl: string | null,
    } | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
};

export type UpdateMessageMutation = {
  updateMessage:  {
    __typename: "Message",
    id: string,
    content: string,
    when: string,
    roomId: string | null,
    userId: string | null,
    owner: string | null,
    author:  {
      __typename: "User",
      id: string,
      given_name: string,
      family_name: string,
      email: string | null,
      phone: string | null,
      owner: string | null,
      hasPaidState: string | null,
      address: string | null,
      city: string | null,
      province: string | null,
      postalCode: string | null,
      country: string | null,
      profileImage:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      aboutMeShort: string | null,
      aboutMeLong: string | null,
      interests: string | null,
      currentRole: string | null,
      currentScope: string | null,
      personality: string | null,
      orgName: string | null,
      orgType: string | null,
      orgSize: string | null,
      orgDescription: string | null,
      joined: string | null,
      owns:  {
        __typename: "ModelGroupConnection",
        nextToken: string | null,
      } | null,
      groups:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
    room:  {
      __typename: "Group",
      id: string,
      owner: string,
      ownerUser:  {
        __typename: "User",
        id: string,
        given_name: string,
        family_name: string,
        email: string | null,
        phone: string | null,
        owner: string | null,
        hasPaidState: string | null,
        address: string | null,
        city: string | null,
        province: string | null,
        postalCode: string | null,
        country: string | null,
        aboutMeShort: string | null,
        aboutMeLong: string | null,
        interests: string | null,
        currentRole: string | null,
        currentScope: string | null,
        personality: string | null,
        orgName: string | null,
        orgType: string | null,
        orgSize: string | null,
        orgDescription: string | null,
        joined: string | null,
      } | null,
      type: string,
      name: string,
      description: string,
      memberCount: number | null,
      members:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      image: string,
      time: string | null,
      lastUpdated: string | null,
      location: string | null,
      length: string | null,
      effort: string | null,
      cost: string | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      eventType: string | null,
      eventUrl: string | null,
    } | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
};

export type DeleteMessageMutation = {
  deleteMessage:  {
    __typename: "Message",
    id: string,
    content: string,
    when: string,
    roomId: string | null,
    userId: string | null,
    owner: string | null,
    author:  {
      __typename: "User",
      id: string,
      given_name: string,
      family_name: string,
      email: string | null,
      phone: string | null,
      owner: string | null,
      hasPaidState: string | null,
      address: string | null,
      city: string | null,
      province: string | null,
      postalCode: string | null,
      country: string | null,
      profileImage:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      aboutMeShort: string | null,
      aboutMeLong: string | null,
      interests: string | null,
      currentRole: string | null,
      currentScope: string | null,
      personality: string | null,
      orgName: string | null,
      orgType: string | null,
      orgSize: string | null,
      orgDescription: string | null,
      joined: string | null,
      owns:  {
        __typename: "ModelGroupConnection",
        nextToken: string | null,
      } | null,
      groups:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
    room:  {
      __typename: "Group",
      id: string,
      owner: string,
      ownerUser:  {
        __typename: "User",
        id: string,
        given_name: string,
        family_name: string,
        email: string | null,
        phone: string | null,
        owner: string | null,
        hasPaidState: string | null,
        address: string | null,
        city: string | null,
        province: string | null,
        postalCode: string | null,
        country: string | null,
        aboutMeShort: string | null,
        aboutMeLong: string | null,
        interests: string | null,
        currentRole: string | null,
        currentScope: string | null,
        personality: string | null,
        orgName: string | null,
        orgType: string | null,
        orgSize: string | null,
        orgDescription: string | null,
        joined: string | null,
      } | null,
      type: string,
      name: string,
      description: string,
      memberCount: number | null,
      members:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      image: string,
      time: string | null,
      lastUpdated: string | null,
      location: string | null,
      length: string | null,
      effort: string | null,
      cost: string | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      eventType: string | null,
      eventUrl: string | null,
    } | null,
  } | null,
};

export type CreateResourceRootMutationVariables = {
  input: CreateResourceRootInput,
};

export type CreateResourceRootMutation = {
  createResourceRoot:  {
    __typename: "ResourceRoot",
    id: string,
    type: string | null,
    resources:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        type: string | null,
        menuTitle: string | null,
        title: string | null,
        description: string | null,
        extendedDescription: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateResourceRootMutationVariables = {
  input: UpdateResourceRootInput,
};

export type UpdateResourceRootMutation = {
  updateResourceRoot:  {
    __typename: "ResourceRoot",
    id: string,
    type: string | null,
    resources:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        type: string | null,
        menuTitle: string | null,
        title: string | null,
        description: string | null,
        extendedDescription: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteResourceRootMutationVariables = {
  input: DeleteResourceRootInput,
};

export type DeleteResourceRootMutation = {
  deleteResourceRoot:  {
    __typename: "ResourceRoot",
    id: string,
    type: string | null,
    resources:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        type: string | null,
        menuTitle: string | null,
        title: string | null,
        description: string | null,
        extendedDescription: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateResourceMutationVariables = {
  input: CreateResourceInput,
};

export type CreateResourceMutation = {
  createResource:  {
    __typename: "Resource",
    id: string,
    type: string | null,
    menuTitle: string | null,
    title: string | null,
    image:  {
      __typename: "Image",
      userId: string | null,
      filenameSmall: string | null,
      filenameMedium: string | null,
      filenameLarge: string | null,
      filenameUpload: string | null,
    } | null,
    description: string | null,
    extendedDescription: string | null,
    series:  {
      __typename: "ModelResourceSeriesConnection",
      items:  Array< {
        __typename: "ResourceSeries",
        id: string,
        type: string | null,
        title: string | null,
        description: string | null,
        image: string | null,
        category: Array< string | null > | null,
        status: string | null,
        allFiles: string | null,
        playlist: string | null,
        playlistImage: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    root:  {
      __typename: "ResourceRoot",
      id: string,
      type: string | null,
      resources:  {
        __typename: "ModelResourceConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateResourceMutationVariables = {
  input: UpdateResourceInput,
};

export type UpdateResourceMutation = {
  updateResource:  {
    __typename: "Resource",
    id: string,
    type: string | null,
    menuTitle: string | null,
    title: string | null,
    image:  {
      __typename: "Image",
      userId: string | null,
      filenameSmall: string | null,
      filenameMedium: string | null,
      filenameLarge: string | null,
      filenameUpload: string | null,
    } | null,
    description: string | null,
    extendedDescription: string | null,
    series:  {
      __typename: "ModelResourceSeriesConnection",
      items:  Array< {
        __typename: "ResourceSeries",
        id: string,
        type: string | null,
        title: string | null,
        description: string | null,
        image: string | null,
        category: Array< string | null > | null,
        status: string | null,
        allFiles: string | null,
        playlist: string | null,
        playlistImage: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    root:  {
      __typename: "ResourceRoot",
      id: string,
      type: string | null,
      resources:  {
        __typename: "ModelResourceConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteResourceMutationVariables = {
  input: DeleteResourceInput,
};

export type DeleteResourceMutation = {
  deleteResource:  {
    __typename: "Resource",
    id: string,
    type: string | null,
    menuTitle: string | null,
    title: string | null,
    image:  {
      __typename: "Image",
      userId: string | null,
      filenameSmall: string | null,
      filenameMedium: string | null,
      filenameLarge: string | null,
      filenameUpload: string | null,
    } | null,
    description: string | null,
    extendedDescription: string | null,
    series:  {
      __typename: "ModelResourceSeriesConnection",
      items:  Array< {
        __typename: "ResourceSeries",
        id: string,
        type: string | null,
        title: string | null,
        description: string | null,
        image: string | null,
        category: Array< string | null > | null,
        status: string | null,
        allFiles: string | null,
        playlist: string | null,
        playlistImage: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    root:  {
      __typename: "ResourceRoot",
      id: string,
      type: string | null,
      resources:  {
        __typename: "ModelResourceConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateResourceSeriesMutationVariables = {
  input: CreateResourceSeriesInput,
};

export type CreateResourceSeriesMutation = {
  createResourceSeries:  {
    __typename: "ResourceSeries",
    id: string,
    type: string | null,
    title: string | null,
    description: string | null,
    image: string | null,
    category: Array< string | null > | null,
    status: string | null,
    allFiles: string | null,
    playlist: string | null,
    playlistImage: string | null,
    episodes:  {
      __typename: "ModelResourceEpisodeConnection",
      items:  Array< {
        __typename: "ResourceEpisode",
        id: string,
        episodeNumber: number | null,
        type: string | null,
        title: string | null,
        description: string | null,
        videoPreview: string | null,
        videoLowRes: string | null,
        videoHiRes: string | null,
        lessonPlan: string | null,
        activityPage: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    resource:  {
      __typename: "Resource",
      id: string,
      type: string | null,
      menuTitle: string | null,
      title: string | null,
      image:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      description: string | null,
      extendedDescription: string | null,
      series:  {
        __typename: "ModelResourceSeriesConnection",
        nextToken: string | null,
      } | null,
      root:  {
        __typename: "ResourceRoot",
        id: string,
        type: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateResourceSeriesMutationVariables = {
  input: UpdateResourceSeriesInput,
};

export type UpdateResourceSeriesMutation = {
  updateResourceSeries:  {
    __typename: "ResourceSeries",
    id: string,
    type: string | null,
    title: string | null,
    description: string | null,
    image: string | null,
    category: Array< string | null > | null,
    status: string | null,
    allFiles: string | null,
    playlist: string | null,
    playlistImage: string | null,
    episodes:  {
      __typename: "ModelResourceEpisodeConnection",
      items:  Array< {
        __typename: "ResourceEpisode",
        id: string,
        episodeNumber: number | null,
        type: string | null,
        title: string | null,
        description: string | null,
        videoPreview: string | null,
        videoLowRes: string | null,
        videoHiRes: string | null,
        lessonPlan: string | null,
        activityPage: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    resource:  {
      __typename: "Resource",
      id: string,
      type: string | null,
      menuTitle: string | null,
      title: string | null,
      image:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      description: string | null,
      extendedDescription: string | null,
      series:  {
        __typename: "ModelResourceSeriesConnection",
        nextToken: string | null,
      } | null,
      root:  {
        __typename: "ResourceRoot",
        id: string,
        type: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteResourceSeriesMutationVariables = {
  input: DeleteResourceSeriesInput,
};

export type DeleteResourceSeriesMutation = {
  deleteResourceSeries:  {
    __typename: "ResourceSeries",
    id: string,
    type: string | null,
    title: string | null,
    description: string | null,
    image: string | null,
    category: Array< string | null > | null,
    status: string | null,
    allFiles: string | null,
    playlist: string | null,
    playlistImage: string | null,
    episodes:  {
      __typename: "ModelResourceEpisodeConnection",
      items:  Array< {
        __typename: "ResourceEpisode",
        id: string,
        episodeNumber: number | null,
        type: string | null,
        title: string | null,
        description: string | null,
        videoPreview: string | null,
        videoLowRes: string | null,
        videoHiRes: string | null,
        lessonPlan: string | null,
        activityPage: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    resource:  {
      __typename: "Resource",
      id: string,
      type: string | null,
      menuTitle: string | null,
      title: string | null,
      image:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      description: string | null,
      extendedDescription: string | null,
      series:  {
        __typename: "ModelResourceSeriesConnection",
        nextToken: string | null,
      } | null,
      root:  {
        __typename: "ResourceRoot",
        id: string,
        type: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateResourceEpisodeMutationVariables = {
  input: CreateResourceEpisodeInput,
};

export type CreateResourceEpisodeMutation = {
  createResourceEpisode:  {
    __typename: "ResourceEpisode",
    id: string,
    episodeNumber: number | null,
    type: string | null,
    title: string | null,
    description: string | null,
    videoPreview: string | null,
    videoLowRes: string | null,
    videoHiRes: string | null,
    lessonPlan: string | null,
    activityPage: string | null,
    series:  {
      __typename: "ResourceSeries",
      id: string,
      type: string | null,
      title: string | null,
      description: string | null,
      image: string | null,
      category: Array< string | null > | null,
      status: string | null,
      allFiles: string | null,
      playlist: string | null,
      playlistImage: string | null,
      episodes:  {
        __typename: "ModelResourceEpisodeConnection",
        nextToken: string | null,
      } | null,
      resource:  {
        __typename: "Resource",
        id: string,
        type: string | null,
        menuTitle: string | null,
        title: string | null,
        description: string | null,
        extendedDescription: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateResourceEpisodeMutationVariables = {
  input: UpdateResourceEpisodeInput,
};

export type UpdateResourceEpisodeMutation = {
  updateResourceEpisode:  {
    __typename: "ResourceEpisode",
    id: string,
    episodeNumber: number | null,
    type: string | null,
    title: string | null,
    description: string | null,
    videoPreview: string | null,
    videoLowRes: string | null,
    videoHiRes: string | null,
    lessonPlan: string | null,
    activityPage: string | null,
    series:  {
      __typename: "ResourceSeries",
      id: string,
      type: string | null,
      title: string | null,
      description: string | null,
      image: string | null,
      category: Array< string | null > | null,
      status: string | null,
      allFiles: string | null,
      playlist: string | null,
      playlistImage: string | null,
      episodes:  {
        __typename: "ModelResourceEpisodeConnection",
        nextToken: string | null,
      } | null,
      resource:  {
        __typename: "Resource",
        id: string,
        type: string | null,
        menuTitle: string | null,
        title: string | null,
        description: string | null,
        extendedDescription: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteResourceEpisodeMutationVariables = {
  input: DeleteResourceEpisodeInput,
};

export type DeleteResourceEpisodeMutation = {
  deleteResourceEpisode:  {
    __typename: "ResourceEpisode",
    id: string,
    episodeNumber: number | null,
    type: string | null,
    title: string | null,
    description: string | null,
    videoPreview: string | null,
    videoLowRes: string | null,
    videoHiRes: string | null,
    lessonPlan: string | null,
    activityPage: string | null,
    series:  {
      __typename: "ResourceSeries",
      id: string,
      type: string | null,
      title: string | null,
      description: string | null,
      image: string | null,
      category: Array< string | null > | null,
      status: string | null,
      allFiles: string | null,
      playlist: string | null,
      playlistImage: string | null,
      episodes:  {
        __typename: "ModelResourceEpisodeConnection",
        nextToken: string | null,
      } | null,
      resource:  {
        __typename: "Resource",
        id: string,
        type: string | null,
        menuTitle: string | null,
        title: string | null,
        description: string | null,
        extendedDescription: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    given_name: string,
    family_name: string,
    email: string | null,
    phone: string | null,
    owner: string | null,
    hasPaidState: string | null,
    address: string | null,
    city: string | null,
    province: string | null,
    postalCode: string | null,
    country: string | null,
    profileImage:  {
      __typename: "Image",
      userId: string | null,
      filenameSmall: string | null,
      filenameMedium: string | null,
      filenameLarge: string | null,
      filenameUpload: string | null,
    } | null,
    aboutMeShort: string | null,
    aboutMeLong: string | null,
    interests: string | null,
    currentRole: string | null,
    currentScope: string | null,
    personality: string | null,
    orgName: string | null,
    orgType: string | null,
    orgSize: string | null,
    orgDescription: string | null,
    joined: string | null,
    owns:  {
      __typename: "ModelGroupConnection",
      items:  Array< {
        __typename: "Group",
        id: string,
        owner: string,
        type: string,
        name: string,
        description: string,
        memberCount: number | null,
        image: string,
        time: string | null,
        lastUpdated: string | null,
        location: string | null,
        length: string | null,
        effort: string | null,
        cost: string | null,
        eventType: string | null,
        eventUrl: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    groups:  {
      __typename: "ModelGroupMemberConnection",
      items:  Array< {
        __typename: "GroupMember",
        id: string,
        groupID: string | null,
        userID: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
        userId: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      given_name: string,
      family_name: string,
      email: string | null,
      phone: string | null,
      owner: string | null,
      hasPaidState: string | null,
      address: string | null,
      city: string | null,
      province: string | null,
      postalCode: string | null,
      country: string | null,
      profileImage:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      aboutMeShort: string | null,
      aboutMeLong: string | null,
      interests: string | null,
      currentRole: string | null,
      currentScope: string | null,
      personality: string | null,
      orgName: string | null,
      orgType: string | null,
      orgSize: string | null,
      orgDescription: string | null,
      joined: string | null,
      owns:  {
        __typename: "ModelGroupConnection",
        nextToken: string | null,
      } | null,
      groups:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup:  {
    __typename: "Group",
    id: string,
    owner: string,
    ownerUser:  {
      __typename: "User",
      id: string,
      given_name: string,
      family_name: string,
      email: string | null,
      phone: string | null,
      owner: string | null,
      hasPaidState: string | null,
      address: string | null,
      city: string | null,
      province: string | null,
      postalCode: string | null,
      country: string | null,
      profileImage:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      aboutMeShort: string | null,
      aboutMeLong: string | null,
      interests: string | null,
      currentRole: string | null,
      currentScope: string | null,
      personality: string | null,
      orgName: string | null,
      orgType: string | null,
      orgSize: string | null,
      orgDescription: string | null,
      joined: string | null,
      owns:  {
        __typename: "ModelGroupConnection",
        nextToken: string | null,
      } | null,
      groups:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
    type: string,
    name: string,
    description: string,
    memberCount: number | null,
    members:  {
      __typename: "ModelGroupMemberConnection",
      items:  Array< {
        __typename: "GroupMember",
        id: string,
        groupID: string | null,
        userID: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image: string,
    time: string | null,
    lastUpdated: string | null,
    location: string | null,
    length: string | null,
    effort: string | null,
    cost: string | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
        userId: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    eventType: string | null,
    eventUrl: string | null,
  } | null,
};

export type ListGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsQuery = {
  listGroups:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "Group",
      id: string,
      owner: string,
      ownerUser:  {
        __typename: "User",
        id: string,
        given_name: string,
        family_name: string,
        email: string | null,
        phone: string | null,
        owner: string | null,
        hasPaidState: string | null,
        address: string | null,
        city: string | null,
        province: string | null,
        postalCode: string | null,
        country: string | null,
        aboutMeShort: string | null,
        aboutMeLong: string | null,
        interests: string | null,
        currentRole: string | null,
        currentScope: string | null,
        personality: string | null,
        orgName: string | null,
        orgType: string | null,
        orgSize: string | null,
        orgDescription: string | null,
        joined: string | null,
      } | null,
      type: string,
      name: string,
      description: string,
      memberCount: number | null,
      members:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      image: string,
      time: string | null,
      lastUpdated: string | null,
      location: string | null,
      length: string | null,
      effort: string | null,
      cost: string | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      eventType: string | null,
      eventUrl: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCourseInfoQueryVariables = {
  id: string,
};

export type GetCourseInfoQuery = {
  getCourseInfo:  {
    __typename: "CourseInfo",
    id: string,
    designedBy: string | null,
    summary: Array< string | null > | null,
    courseDetails:  {
      __typename: "ModelCourseWeekConnection",
      items:  Array< {
        __typename: "CourseWeek",
        id: string,
        week: string | null,
        date: string | null,
        name: string | null,
        leader: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subTitle: string | null,
    introduction: Array< string | null > | null,
  } | null,
};

export type ListCourseInfosQueryVariables = {
  filter?: ModelCourseInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCourseInfosQuery = {
  listCourseInfos:  {
    __typename: "ModelCourseInfoConnection",
    items:  Array< {
      __typename: "CourseInfo",
      id: string,
      designedBy: string | null,
      summary: Array< string | null > | null,
      courseDetails:  {
        __typename: "ModelCourseWeekConnection",
        nextToken: string | null,
      } | null,
      subTitle: string | null,
      introduction: Array< string | null > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCourseWeekQueryVariables = {
  id: string,
};

export type GetCourseWeekQuery = {
  getCourseWeek:  {
    __typename: "CourseWeek",
    id: string,
    week: string | null,
    date: string | null,
    name: string | null,
    leader: string | null,
    lessons:  {
      __typename: "ModelCourseLessonConnection",
      items:  Array< {
        __typename: "CourseLesson",
        id: string,
        name: string | null,
        time: string | null,
        description: Array< string | null > | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListCourseWeeksQueryVariables = {
  filter?: ModelCourseWeekFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCourseWeeksQuery = {
  listCourseWeeks:  {
    __typename: "ModelCourseWeekConnection",
    items:  Array< {
      __typename: "CourseWeek",
      id: string,
      week: string | null,
      date: string | null,
      name: string | null,
      leader: string | null,
      lessons:  {
        __typename: "ModelCourseLessonConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCourseLessonQueryVariables = {
  id: string,
};

export type GetCourseLessonQuery = {
  getCourseLesson:  {
    __typename: "CourseLesson",
    id: string,
    name: string | null,
    time: string | null,
    description: Array< string | null > | null,
    assignment:  {
      __typename: "ModelCourseAssignmentConnection",
      items:  Array< {
        __typename: "CourseAssignment",
        id: string,
        due: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListCourseLessonsQueryVariables = {
  filter?: ModelCourseLessonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCourseLessonsQuery = {
  listCourseLessons:  {
    __typename: "ModelCourseLessonConnection",
    items:  Array< {
      __typename: "CourseLesson",
      id: string,
      name: string | null,
      time: string | null,
      description: Array< string | null > | null,
      assignment:  {
        __typename: "ModelCourseAssignmentConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCourseAssignmentQueryVariables = {
  id: string,
};

export type GetCourseAssignmentQuery = {
  getCourseAssignment:  {
    __typename: "CourseAssignment",
    id: string,
    due: string | null,
    description: string | null,
  } | null,
};

export type ListCourseAssignmentsQueryVariables = {
  filter?: ModelCourseAssignmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCourseAssignmentsQuery = {
  listCourseAssignments:  {
    __typename: "ModelCourseAssignmentConnection",
    items:  Array< {
      __typename: "CourseAssignment",
      id: string,
      due: string | null,
      description: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage:  {
    __typename: "Message",
    id: string,
    content: string,
    when: string,
    roomId: string | null,
    userId: string | null,
    owner: string | null,
    author:  {
      __typename: "User",
      id: string,
      given_name: string,
      family_name: string,
      email: string | null,
      phone: string | null,
      owner: string | null,
      hasPaidState: string | null,
      address: string | null,
      city: string | null,
      province: string | null,
      postalCode: string | null,
      country: string | null,
      profileImage:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      aboutMeShort: string | null,
      aboutMeLong: string | null,
      interests: string | null,
      currentRole: string | null,
      currentScope: string | null,
      personality: string | null,
      orgName: string | null,
      orgType: string | null,
      orgSize: string | null,
      orgDescription: string | null,
      joined: string | null,
      owns:  {
        __typename: "ModelGroupConnection",
        nextToken: string | null,
      } | null,
      groups:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
    room:  {
      __typename: "Group",
      id: string,
      owner: string,
      ownerUser:  {
        __typename: "User",
        id: string,
        given_name: string,
        family_name: string,
        email: string | null,
        phone: string | null,
        owner: string | null,
        hasPaidState: string | null,
        address: string | null,
        city: string | null,
        province: string | null,
        postalCode: string | null,
        country: string | null,
        aboutMeShort: string | null,
        aboutMeLong: string | null,
        interests: string | null,
        currentRole: string | null,
        currentScope: string | null,
        personality: string | null,
        orgName: string | null,
        orgType: string | null,
        orgSize: string | null,
        orgDescription: string | null,
        joined: string | null,
      } | null,
      type: string,
      name: string,
      description: string,
      memberCount: number | null,
      members:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      image: string,
      time: string | null,
      lastUpdated: string | null,
      location: string | null,
      length: string | null,
      effort: string | null,
      cost: string | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      eventType: string | null,
      eventUrl: string | null,
    } | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      when: string,
      roomId: string | null,
      userId: string | null,
      owner: string | null,
      author:  {
        __typename: "User",
        id: string,
        given_name: string,
        family_name: string,
        email: string | null,
        phone: string | null,
        owner: string | null,
        hasPaidState: string | null,
        address: string | null,
        city: string | null,
        province: string | null,
        postalCode: string | null,
        country: string | null,
        aboutMeShort: string | null,
        aboutMeLong: string | null,
        interests: string | null,
        currentRole: string | null,
        currentScope: string | null,
        personality: string | null,
        orgName: string | null,
        orgType: string | null,
        orgSize: string | null,
        orgDescription: string | null,
        joined: string | null,
      } | null,
      room:  {
        __typename: "Group",
        id: string,
        owner: string,
        type: string,
        name: string,
        description: string,
        memberCount: number | null,
        image: string,
        time: string | null,
        lastUpdated: string | null,
        location: string | null,
        length: string | null,
        effort: string | null,
        cost: string | null,
        eventType: string | null,
        eventUrl: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetResourceRootQueryVariables = {
  id: string,
};

export type GetResourceRootQuery = {
  getResourceRoot:  {
    __typename: "ResourceRoot",
    id: string,
    type: string | null,
    resources:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        type: string | null,
        menuTitle: string | null,
        title: string | null,
        description: string | null,
        extendedDescription: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListResourceRootsQueryVariables = {
  filter?: ModelResourceRootFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourceRootsQuery = {
  listResourceRoots:  {
    __typename: "ModelResourceRootConnection",
    items:  Array< {
      __typename: "ResourceRoot",
      id: string,
      type: string | null,
      resources:  {
        __typename: "ModelResourceConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetResourceQueryVariables = {
  id: string,
};

export type GetResourceQuery = {
  getResource:  {
    __typename: "Resource",
    id: string,
    type: string | null,
    menuTitle: string | null,
    title: string | null,
    image:  {
      __typename: "Image",
      userId: string | null,
      filenameSmall: string | null,
      filenameMedium: string | null,
      filenameLarge: string | null,
      filenameUpload: string | null,
    } | null,
    description: string | null,
    extendedDescription: string | null,
    series:  {
      __typename: "ModelResourceSeriesConnection",
      items:  Array< {
        __typename: "ResourceSeries",
        id: string,
        type: string | null,
        title: string | null,
        description: string | null,
        image: string | null,
        category: Array< string | null > | null,
        status: string | null,
        allFiles: string | null,
        playlist: string | null,
        playlistImage: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    root:  {
      __typename: "ResourceRoot",
      id: string,
      type: string | null,
      resources:  {
        __typename: "ModelResourceConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListResourcesQueryVariables = {
  filter?: ModelResourceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourcesQuery = {
  listResources:  {
    __typename: "ModelResourceConnection",
    items:  Array< {
      __typename: "Resource",
      id: string,
      type: string | null,
      menuTitle: string | null,
      title: string | null,
      image:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      description: string | null,
      extendedDescription: string | null,
      series:  {
        __typename: "ModelResourceSeriesConnection",
        nextToken: string | null,
      } | null,
      root:  {
        __typename: "ResourceRoot",
        id: string,
        type: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetResourceSeriesQueryVariables = {
  id: string,
};

export type GetResourceSeriesQuery = {
  getResourceSeries:  {
    __typename: "ResourceSeries",
    id: string,
    type: string | null,
    title: string | null,
    description: string | null,
    image: string | null,
    category: Array< string | null > | null,
    status: string | null,
    allFiles: string | null,
    playlist: string | null,
    playlistImage: string | null,
    episodes:  {
      __typename: "ModelResourceEpisodeConnection",
      items:  Array< {
        __typename: "ResourceEpisode",
        id: string,
        episodeNumber: number | null,
        type: string | null,
        title: string | null,
        description: string | null,
        videoPreview: string | null,
        videoLowRes: string | null,
        videoHiRes: string | null,
        lessonPlan: string | null,
        activityPage: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    resource:  {
      __typename: "Resource",
      id: string,
      type: string | null,
      menuTitle: string | null,
      title: string | null,
      image:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      description: string | null,
      extendedDescription: string | null,
      series:  {
        __typename: "ModelResourceSeriesConnection",
        nextToken: string | null,
      } | null,
      root:  {
        __typename: "ResourceRoot",
        id: string,
        type: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListResourceSeriessQueryVariables = {
  filter?: ModelResourceSeriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourceSeriessQuery = {
  listResourceSeriess:  {
    __typename: "ModelResourceSeriesConnection",
    items:  Array< {
      __typename: "ResourceSeries",
      id: string,
      type: string | null,
      title: string | null,
      description: string | null,
      image: string | null,
      category: Array< string | null > | null,
      status: string | null,
      allFiles: string | null,
      playlist: string | null,
      playlistImage: string | null,
      episodes:  {
        __typename: "ModelResourceEpisodeConnection",
        nextToken: string | null,
      } | null,
      resource:  {
        __typename: "Resource",
        id: string,
        type: string | null,
        menuTitle: string | null,
        title: string | null,
        description: string | null,
        extendedDescription: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetResourceEpisodeQueryVariables = {
  id: string,
};

export type GetResourceEpisodeQuery = {
  getResourceEpisode:  {
    __typename: "ResourceEpisode",
    id: string,
    episodeNumber: number | null,
    type: string | null,
    title: string | null,
    description: string | null,
    videoPreview: string | null,
    videoLowRes: string | null,
    videoHiRes: string | null,
    lessonPlan: string | null,
    activityPage: string | null,
    series:  {
      __typename: "ResourceSeries",
      id: string,
      type: string | null,
      title: string | null,
      description: string | null,
      image: string | null,
      category: Array< string | null > | null,
      status: string | null,
      allFiles: string | null,
      playlist: string | null,
      playlistImage: string | null,
      episodes:  {
        __typename: "ModelResourceEpisodeConnection",
        nextToken: string | null,
      } | null,
      resource:  {
        __typename: "Resource",
        id: string,
        type: string | null,
        menuTitle: string | null,
        title: string | null,
        description: string | null,
        extendedDescription: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListResourceEpisodesQueryVariables = {
  filter?: ModelResourceEpisodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourceEpisodesQuery = {
  listResourceEpisodes:  {
    __typename: "ModelResourceEpisodeConnection",
    items:  Array< {
      __typename: "ResourceEpisode",
      id: string,
      episodeNumber: number | null,
      type: string | null,
      title: string | null,
      description: string | null,
      videoPreview: string | null,
      videoLowRes: string | null,
      videoHiRes: string | null,
      lessonPlan: string | null,
      activityPage: string | null,
      series:  {
        __typename: "ResourceSeries",
        id: string,
        type: string | null,
        title: string | null,
        description: string | null,
        image: string | null,
        category: Array< string | null > | null,
        status: string | null,
        allFiles: string | null,
        playlist: string | null,
        playlistImage: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GroupByTypeQueryVariables = {
  type?: string | null,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GroupByTypeQuery = {
  groupByType:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "Group",
      id: string,
      owner: string,
      ownerUser:  {
        __typename: "User",
        id: string,
        given_name: string,
        family_name: string,
        email: string | null,
        phone: string | null,
        owner: string | null,
        hasPaidState: string | null,
        address: string | null,
        city: string | null,
        province: string | null,
        postalCode: string | null,
        country: string | null,
        aboutMeShort: string | null,
        aboutMeLong: string | null,
        interests: string | null,
        currentRole: string | null,
        currentScope: string | null,
        personality: string | null,
        orgName: string | null,
        orgType: string | null,
        orgSize: string | null,
        orgDescription: string | null,
        joined: string | null,
      } | null,
      type: string,
      name: string,
      description: string,
      memberCount: number | null,
      members:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      image: string,
      time: string | null,
      lastUpdated: string | null,
      location: string | null,
      length: string | null,
      effort: string | null,
      cost: string | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      eventType: string | null,
      eventUrl: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type MessagesByRoomQueryVariables = {
  roomId?: string | null,
  when?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByRoomQuery = {
  messagesByRoom:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      when: string,
      roomId: string | null,
      userId: string | null,
      owner: string | null,
      author:  {
        __typename: "User",
        id: string,
        given_name: string,
        family_name: string,
        email: string | null,
        phone: string | null,
        owner: string | null,
        hasPaidState: string | null,
        address: string | null,
        city: string | null,
        province: string | null,
        postalCode: string | null,
        country: string | null,
        aboutMeShort: string | null,
        aboutMeLong: string | null,
        interests: string | null,
        currentRole: string | null,
        currentScope: string | null,
        personality: string | null,
        orgName: string | null,
        orgType: string | null,
        orgSize: string | null,
        orgDescription: string | null,
        joined: string | null,
      } | null,
      room:  {
        __typename: "Group",
        id: string,
        owner: string,
        type: string,
        name: string,
        description: string,
        memberCount: number | null,
        image: string,
        time: string | null,
        lastUpdated: string | null,
        location: string | null,
        length: string | null,
        effort: string | null,
        cost: string | null,
        eventType: string | null,
        eventUrl: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchGroupsQueryVariables = {
  filter?: SearchableGroupFilterInput | null,
  sort?: SearchableGroupSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SearchGroupsQuery = {
  searchGroups:  {
    __typename: "SearchableGroupConnection",
    items:  Array< {
      __typename: "Group",
      id: string,
      owner: string,
      ownerUser:  {
        __typename: "User",
        id: string,
        given_name: string,
        family_name: string,
        email: string | null,
        phone: string | null,
        owner: string | null,
        hasPaidState: string | null,
        address: string | null,
        city: string | null,
        province: string | null,
        postalCode: string | null,
        country: string | null,
        aboutMeShort: string | null,
        aboutMeLong: string | null,
        interests: string | null,
        currentRole: string | null,
        currentScope: string | null,
        personality: string | null,
        orgName: string | null,
        orgType: string | null,
        orgSize: string | null,
        orgDescription: string | null,
        joined: string | null,
      } | null,
      type: string,
      name: string,
      description: string,
      memberCount: number | null,
      members:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      image: string,
      time: string | null,
      lastUpdated: string | null,
      location: string | null,
      length: string | null,
      effort: string | null,
      cost: string | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      eventType: string | null,
      eventUrl: string | null,
    } | null > | null,
    nextToken: string | null,
    total: number | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  roomId: string,
};

export type OnCreateMessageSubscription = {
  onCreateMessage:  {
    __typename: "Message",
    id: string,
    content: string,
    when: string,
    roomId: string | null,
    userId: string | null,
    owner: string | null,
    author:  {
      __typename: "User",
      id: string,
      given_name: string,
      family_name: string,
      email: string | null,
      phone: string | null,
      owner: string | null,
      hasPaidState: string | null,
      address: string | null,
      city: string | null,
      province: string | null,
      postalCode: string | null,
      country: string | null,
      profileImage:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      aboutMeShort: string | null,
      aboutMeLong: string | null,
      interests: string | null,
      currentRole: string | null,
      currentScope: string | null,
      personality: string | null,
      orgName: string | null,
      orgType: string | null,
      orgSize: string | null,
      orgDescription: string | null,
      joined: string | null,
      owns:  {
        __typename: "ModelGroupConnection",
        nextToken: string | null,
      } | null,
      groups:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
    room:  {
      __typename: "Group",
      id: string,
      owner: string,
      ownerUser:  {
        __typename: "User",
        id: string,
        given_name: string,
        family_name: string,
        email: string | null,
        phone: string | null,
        owner: string | null,
        hasPaidState: string | null,
        address: string | null,
        city: string | null,
        province: string | null,
        postalCode: string | null,
        country: string | null,
        aboutMeShort: string | null,
        aboutMeLong: string | null,
        interests: string | null,
        currentRole: string | null,
        currentScope: string | null,
        personality: string | null,
        orgName: string | null,
        orgType: string | null,
        orgSize: string | null,
        orgDescription: string | null,
        joined: string | null,
      } | null,
      type: string,
      name: string,
      description: string,
      memberCount: number | null,
      members:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      image: string,
      time: string | null,
      lastUpdated: string | null,
      location: string | null,
      length: string | null,
      effort: string | null,
      cost: string | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      eventType: string | null,
      eventUrl: string | null,
    } | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner: string,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    given_name: string,
    family_name: string,
    email: string | null,
    phone: string | null,
    owner: string | null,
    hasPaidState: string | null,
    address: string | null,
    city: string | null,
    province: string | null,
    postalCode: string | null,
    country: string | null,
    profileImage:  {
      __typename: "Image",
      userId: string | null,
      filenameSmall: string | null,
      filenameMedium: string | null,
      filenameLarge: string | null,
      filenameUpload: string | null,
    } | null,
    aboutMeShort: string | null,
    aboutMeLong: string | null,
    interests: string | null,
    currentRole: string | null,
    currentScope: string | null,
    personality: string | null,
    orgName: string | null,
    orgType: string | null,
    orgSize: string | null,
    orgDescription: string | null,
    joined: string | null,
    owns:  {
      __typename: "ModelGroupConnection",
      items:  Array< {
        __typename: "Group",
        id: string,
        owner: string,
        type: string,
        name: string,
        description: string,
        memberCount: number | null,
        image: string,
        time: string | null,
        lastUpdated: string | null,
        location: string | null,
        length: string | null,
        effort: string | null,
        cost: string | null,
        eventType: string | null,
        eventUrl: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    groups:  {
      __typename: "ModelGroupMemberConnection",
      items:  Array< {
        __typename: "GroupMember",
        id: string,
        groupID: string | null,
        userID: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
        userId: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner: string,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    given_name: string,
    family_name: string,
    email: string | null,
    phone: string | null,
    owner: string | null,
    hasPaidState: string | null,
    address: string | null,
    city: string | null,
    province: string | null,
    postalCode: string | null,
    country: string | null,
    profileImage:  {
      __typename: "Image",
      userId: string | null,
      filenameSmall: string | null,
      filenameMedium: string | null,
      filenameLarge: string | null,
      filenameUpload: string | null,
    } | null,
    aboutMeShort: string | null,
    aboutMeLong: string | null,
    interests: string | null,
    currentRole: string | null,
    currentScope: string | null,
    personality: string | null,
    orgName: string | null,
    orgType: string | null,
    orgSize: string | null,
    orgDescription: string | null,
    joined: string | null,
    owns:  {
      __typename: "ModelGroupConnection",
      items:  Array< {
        __typename: "Group",
        id: string,
        owner: string,
        type: string,
        name: string,
        description: string,
        memberCount: number | null,
        image: string,
        time: string | null,
        lastUpdated: string | null,
        location: string | null,
        length: string | null,
        effort: string | null,
        cost: string | null,
        eventType: string | null,
        eventUrl: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    groups:  {
      __typename: "ModelGroupMemberConnection",
      items:  Array< {
        __typename: "GroupMember",
        id: string,
        groupID: string | null,
        userID: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
        userId: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner: string,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    given_name: string,
    family_name: string,
    email: string | null,
    phone: string | null,
    owner: string | null,
    hasPaidState: string | null,
    address: string | null,
    city: string | null,
    province: string | null,
    postalCode: string | null,
    country: string | null,
    profileImage:  {
      __typename: "Image",
      userId: string | null,
      filenameSmall: string | null,
      filenameMedium: string | null,
      filenameLarge: string | null,
      filenameUpload: string | null,
    } | null,
    aboutMeShort: string | null,
    aboutMeLong: string | null,
    interests: string | null,
    currentRole: string | null,
    currentScope: string | null,
    personality: string | null,
    orgName: string | null,
    orgType: string | null,
    orgSize: string | null,
    orgDescription: string | null,
    joined: string | null,
    owns:  {
      __typename: "ModelGroupConnection",
      items:  Array< {
        __typename: "Group",
        id: string,
        owner: string,
        type: string,
        name: string,
        description: string,
        memberCount: number | null,
        image: string,
        time: string | null,
        lastUpdated: string | null,
        location: string | null,
        length: string | null,
        effort: string | null,
        cost: string | null,
        eventType: string | null,
        eventUrl: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    groups:  {
      __typename: "ModelGroupMemberConnection",
      items:  Array< {
        __typename: "GroupMember",
        id: string,
        groupID: string | null,
        userID: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
        userId: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateGroupMemberSubscription = {
  onCreateGroupMember:  {
    __typename: "GroupMember",
    id: string,
    groupID: string | null,
    userID: string | null,
    group:  {
      __typename: "Group",
      id: string,
      owner: string,
      ownerUser:  {
        __typename: "User",
        id: string,
        given_name: string,
        family_name: string,
        email: string | null,
        phone: string | null,
        owner: string | null,
        hasPaidState: string | null,
        address: string | null,
        city: string | null,
        province: string | null,
        postalCode: string | null,
        country: string | null,
        aboutMeShort: string | null,
        aboutMeLong: string | null,
        interests: string | null,
        currentRole: string | null,
        currentScope: string | null,
        personality: string | null,
        orgName: string | null,
        orgType: string | null,
        orgSize: string | null,
        orgDescription: string | null,
        joined: string | null,
      } | null,
      type: string,
      name: string,
      description: string,
      memberCount: number | null,
      members:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      image: string,
      time: string | null,
      lastUpdated: string | null,
      location: string | null,
      length: string | null,
      effort: string | null,
      cost: string | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      eventType: string | null,
      eventUrl: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      given_name: string,
      family_name: string,
      email: string | null,
      phone: string | null,
      owner: string | null,
      hasPaidState: string | null,
      address: string | null,
      city: string | null,
      province: string | null,
      postalCode: string | null,
      country: string | null,
      profileImage:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      aboutMeShort: string | null,
      aboutMeLong: string | null,
      interests: string | null,
      currentRole: string | null,
      currentScope: string | null,
      personality: string | null,
      orgName: string | null,
      orgType: string | null,
      orgSize: string | null,
      orgDescription: string | null,
      joined: string | null,
      owns:  {
        __typename: "ModelGroupConnection",
        nextToken: string | null,
      } | null,
      groups:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateGroupMemberSubscription = {
  onUpdateGroupMember:  {
    __typename: "GroupMember",
    id: string,
    groupID: string | null,
    userID: string | null,
    group:  {
      __typename: "Group",
      id: string,
      owner: string,
      ownerUser:  {
        __typename: "User",
        id: string,
        given_name: string,
        family_name: string,
        email: string | null,
        phone: string | null,
        owner: string | null,
        hasPaidState: string | null,
        address: string | null,
        city: string | null,
        province: string | null,
        postalCode: string | null,
        country: string | null,
        aboutMeShort: string | null,
        aboutMeLong: string | null,
        interests: string | null,
        currentRole: string | null,
        currentScope: string | null,
        personality: string | null,
        orgName: string | null,
        orgType: string | null,
        orgSize: string | null,
        orgDescription: string | null,
        joined: string | null,
      } | null,
      type: string,
      name: string,
      description: string,
      memberCount: number | null,
      members:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      image: string,
      time: string | null,
      lastUpdated: string | null,
      location: string | null,
      length: string | null,
      effort: string | null,
      cost: string | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      eventType: string | null,
      eventUrl: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      given_name: string,
      family_name: string,
      email: string | null,
      phone: string | null,
      owner: string | null,
      hasPaidState: string | null,
      address: string | null,
      city: string | null,
      province: string | null,
      postalCode: string | null,
      country: string | null,
      profileImage:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      aboutMeShort: string | null,
      aboutMeLong: string | null,
      interests: string | null,
      currentRole: string | null,
      currentScope: string | null,
      personality: string | null,
      orgName: string | null,
      orgType: string | null,
      orgSize: string | null,
      orgDescription: string | null,
      joined: string | null,
      owns:  {
        __typename: "ModelGroupConnection",
        nextToken: string | null,
      } | null,
      groups:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteGroupMemberSubscription = {
  onDeleteGroupMember:  {
    __typename: "GroupMember",
    id: string,
    groupID: string | null,
    userID: string | null,
    group:  {
      __typename: "Group",
      id: string,
      owner: string,
      ownerUser:  {
        __typename: "User",
        id: string,
        given_name: string,
        family_name: string,
        email: string | null,
        phone: string | null,
        owner: string | null,
        hasPaidState: string | null,
        address: string | null,
        city: string | null,
        province: string | null,
        postalCode: string | null,
        country: string | null,
        aboutMeShort: string | null,
        aboutMeLong: string | null,
        interests: string | null,
        currentRole: string | null,
        currentScope: string | null,
        personality: string | null,
        orgName: string | null,
        orgType: string | null,
        orgSize: string | null,
        orgDescription: string | null,
        joined: string | null,
      } | null,
      type: string,
      name: string,
      description: string,
      memberCount: number | null,
      members:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      image: string,
      time: string | null,
      lastUpdated: string | null,
      location: string | null,
      length: string | null,
      effort: string | null,
      cost: string | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      eventType: string | null,
      eventUrl: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      given_name: string,
      family_name: string,
      email: string | null,
      phone: string | null,
      owner: string | null,
      hasPaidState: string | null,
      address: string | null,
      city: string | null,
      province: string | null,
      postalCode: string | null,
      country: string | null,
      profileImage:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      aboutMeShort: string | null,
      aboutMeLong: string | null,
      interests: string | null,
      currentRole: string | null,
      currentScope: string | null,
      personality: string | null,
      orgName: string | null,
      orgType: string | null,
      orgSize: string | null,
      orgDescription: string | null,
      joined: string | null,
      owns:  {
        __typename: "ModelGroupConnection",
        nextToken: string | null,
      } | null,
      groups:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateGroupSubscriptionVariables = {
  owner: string,
};

export type OnCreateGroupSubscription = {
  onCreateGroup:  {
    __typename: "Group",
    id: string,
    owner: string,
    ownerUser:  {
      __typename: "User",
      id: string,
      given_name: string,
      family_name: string,
      email: string | null,
      phone: string | null,
      owner: string | null,
      hasPaidState: string | null,
      address: string | null,
      city: string | null,
      province: string | null,
      postalCode: string | null,
      country: string | null,
      profileImage:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      aboutMeShort: string | null,
      aboutMeLong: string | null,
      interests: string | null,
      currentRole: string | null,
      currentScope: string | null,
      personality: string | null,
      orgName: string | null,
      orgType: string | null,
      orgSize: string | null,
      orgDescription: string | null,
      joined: string | null,
      owns:  {
        __typename: "ModelGroupConnection",
        nextToken: string | null,
      } | null,
      groups:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
    type: string,
    name: string,
    description: string,
    memberCount: number | null,
    members:  {
      __typename: "ModelGroupMemberConnection",
      items:  Array< {
        __typename: "GroupMember",
        id: string,
        groupID: string | null,
        userID: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image: string,
    time: string | null,
    lastUpdated: string | null,
    location: string | null,
    length: string | null,
    effort: string | null,
    cost: string | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
        userId: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    eventType: string | null,
    eventUrl: string | null,
  } | null,
};

export type OnUpdateGroupSubscriptionVariables = {
  owner: string,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup:  {
    __typename: "Group",
    id: string,
    owner: string,
    ownerUser:  {
      __typename: "User",
      id: string,
      given_name: string,
      family_name: string,
      email: string | null,
      phone: string | null,
      owner: string | null,
      hasPaidState: string | null,
      address: string | null,
      city: string | null,
      province: string | null,
      postalCode: string | null,
      country: string | null,
      profileImage:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      aboutMeShort: string | null,
      aboutMeLong: string | null,
      interests: string | null,
      currentRole: string | null,
      currentScope: string | null,
      personality: string | null,
      orgName: string | null,
      orgType: string | null,
      orgSize: string | null,
      orgDescription: string | null,
      joined: string | null,
      owns:  {
        __typename: "ModelGroupConnection",
        nextToken: string | null,
      } | null,
      groups:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
    type: string,
    name: string,
    description: string,
    memberCount: number | null,
    members:  {
      __typename: "ModelGroupMemberConnection",
      items:  Array< {
        __typename: "GroupMember",
        id: string,
        groupID: string | null,
        userID: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image: string,
    time: string | null,
    lastUpdated: string | null,
    location: string | null,
    length: string | null,
    effort: string | null,
    cost: string | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
        userId: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    eventType: string | null,
    eventUrl: string | null,
  } | null,
};

export type OnDeleteGroupSubscriptionVariables = {
  owner: string,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup:  {
    __typename: "Group",
    id: string,
    owner: string,
    ownerUser:  {
      __typename: "User",
      id: string,
      given_name: string,
      family_name: string,
      email: string | null,
      phone: string | null,
      owner: string | null,
      hasPaidState: string | null,
      address: string | null,
      city: string | null,
      province: string | null,
      postalCode: string | null,
      country: string | null,
      profileImage:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      aboutMeShort: string | null,
      aboutMeLong: string | null,
      interests: string | null,
      currentRole: string | null,
      currentScope: string | null,
      personality: string | null,
      orgName: string | null,
      orgType: string | null,
      orgSize: string | null,
      orgDescription: string | null,
      joined: string | null,
      owns:  {
        __typename: "ModelGroupConnection",
        nextToken: string | null,
      } | null,
      groups:  {
        __typename: "ModelGroupMemberConnection",
        nextToken: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
    type: string,
    name: string,
    description: string,
    memberCount: number | null,
    members:  {
      __typename: "ModelGroupMemberConnection",
      items:  Array< {
        __typename: "GroupMember",
        id: string,
        groupID: string | null,
        userID: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image: string,
    time: string | null,
    lastUpdated: string | null,
    location: string | null,
    length: string | null,
    effort: string | null,
    cost: string | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
        userId: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    eventType: string | null,
    eventUrl: string | null,
  } | null,
};

export type OnCreateCourseInfoSubscriptionVariables = {
  owner: string,
};

export type OnCreateCourseInfoSubscription = {
  onCreateCourseInfo:  {
    __typename: "CourseInfo",
    id: string,
    designedBy: string | null,
    summary: Array< string | null > | null,
    courseDetails:  {
      __typename: "ModelCourseWeekConnection",
      items:  Array< {
        __typename: "CourseWeek",
        id: string,
        week: string | null,
        date: string | null,
        name: string | null,
        leader: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subTitle: string | null,
    introduction: Array< string | null > | null,
  } | null,
};

export type OnUpdateCourseInfoSubscriptionVariables = {
  owner: string,
};

export type OnUpdateCourseInfoSubscription = {
  onUpdateCourseInfo:  {
    __typename: "CourseInfo",
    id: string,
    designedBy: string | null,
    summary: Array< string | null > | null,
    courseDetails:  {
      __typename: "ModelCourseWeekConnection",
      items:  Array< {
        __typename: "CourseWeek",
        id: string,
        week: string | null,
        date: string | null,
        name: string | null,
        leader: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subTitle: string | null,
    introduction: Array< string | null > | null,
  } | null,
};

export type OnDeleteCourseInfoSubscriptionVariables = {
  owner: string,
};

export type OnDeleteCourseInfoSubscription = {
  onDeleteCourseInfo:  {
    __typename: "CourseInfo",
    id: string,
    designedBy: string | null,
    summary: Array< string | null > | null,
    courseDetails:  {
      __typename: "ModelCourseWeekConnection",
      items:  Array< {
        __typename: "CourseWeek",
        id: string,
        week: string | null,
        date: string | null,
        name: string | null,
        leader: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subTitle: string | null,
    introduction: Array< string | null > | null,
  } | null,
};

export type OnCreateCourseWeekSubscription = {
  onCreateCourseWeek:  {
    __typename: "CourseWeek",
    id: string,
    week: string | null,
    date: string | null,
    name: string | null,
    leader: string | null,
    lessons:  {
      __typename: "ModelCourseLessonConnection",
      items:  Array< {
        __typename: "CourseLesson",
        id: string,
        name: string | null,
        time: string | null,
        description: Array< string | null > | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateCourseWeekSubscription = {
  onUpdateCourseWeek:  {
    __typename: "CourseWeek",
    id: string,
    week: string | null,
    date: string | null,
    name: string | null,
    leader: string | null,
    lessons:  {
      __typename: "ModelCourseLessonConnection",
      items:  Array< {
        __typename: "CourseLesson",
        id: string,
        name: string | null,
        time: string | null,
        description: Array< string | null > | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteCourseWeekSubscription = {
  onDeleteCourseWeek:  {
    __typename: "CourseWeek",
    id: string,
    week: string | null,
    date: string | null,
    name: string | null,
    leader: string | null,
    lessons:  {
      __typename: "ModelCourseLessonConnection",
      items:  Array< {
        __typename: "CourseLesson",
        id: string,
        name: string | null,
        time: string | null,
        description: Array< string | null > | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateCourseLessonSubscription = {
  onCreateCourseLesson:  {
    __typename: "CourseLesson",
    id: string,
    name: string | null,
    time: string | null,
    description: Array< string | null > | null,
    assignment:  {
      __typename: "ModelCourseAssignmentConnection",
      items:  Array< {
        __typename: "CourseAssignment",
        id: string,
        due: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateCourseLessonSubscription = {
  onUpdateCourseLesson:  {
    __typename: "CourseLesson",
    id: string,
    name: string | null,
    time: string | null,
    description: Array< string | null > | null,
    assignment:  {
      __typename: "ModelCourseAssignmentConnection",
      items:  Array< {
        __typename: "CourseAssignment",
        id: string,
        due: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteCourseLessonSubscription = {
  onDeleteCourseLesson:  {
    __typename: "CourseLesson",
    id: string,
    name: string | null,
    time: string | null,
    description: Array< string | null > | null,
    assignment:  {
      __typename: "ModelCourseAssignmentConnection",
      items:  Array< {
        __typename: "CourseAssignment",
        id: string,
        due: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateCourseAssignmentSubscription = {
  onCreateCourseAssignment:  {
    __typename: "CourseAssignment",
    id: string,
    due: string | null,
    description: string | null,
  } | null,
};

export type OnUpdateCourseAssignmentSubscription = {
  onUpdateCourseAssignment:  {
    __typename: "CourseAssignment",
    id: string,
    due: string | null,
    description: string | null,
  } | null,
};

export type OnDeleteCourseAssignmentSubscription = {
  onDeleteCourseAssignment:  {
    __typename: "CourseAssignment",
    id: string,
    due: string | null,
    description: string | null,
  } | null,
};

export type OnCreateResourceRootSubscription = {
  onCreateResourceRoot:  {
    __typename: "ResourceRoot",
    id: string,
    type: string | null,
    resources:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        type: string | null,
        menuTitle: string | null,
        title: string | null,
        description: string | null,
        extendedDescription: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateResourceRootSubscription = {
  onUpdateResourceRoot:  {
    __typename: "ResourceRoot",
    id: string,
    type: string | null,
    resources:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        type: string | null,
        menuTitle: string | null,
        title: string | null,
        description: string | null,
        extendedDescription: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteResourceRootSubscription = {
  onDeleteResourceRoot:  {
    __typename: "ResourceRoot",
    id: string,
    type: string | null,
    resources:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        type: string | null,
        menuTitle: string | null,
        title: string | null,
        description: string | null,
        extendedDescription: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateResourceSubscription = {
  onCreateResource:  {
    __typename: "Resource",
    id: string,
    type: string | null,
    menuTitle: string | null,
    title: string | null,
    image:  {
      __typename: "Image",
      userId: string | null,
      filenameSmall: string | null,
      filenameMedium: string | null,
      filenameLarge: string | null,
      filenameUpload: string | null,
    } | null,
    description: string | null,
    extendedDescription: string | null,
    series:  {
      __typename: "ModelResourceSeriesConnection",
      items:  Array< {
        __typename: "ResourceSeries",
        id: string,
        type: string | null,
        title: string | null,
        description: string | null,
        image: string | null,
        category: Array< string | null > | null,
        status: string | null,
        allFiles: string | null,
        playlist: string | null,
        playlistImage: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    root:  {
      __typename: "ResourceRoot",
      id: string,
      type: string | null,
      resources:  {
        __typename: "ModelResourceConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateResourceSubscription = {
  onUpdateResource:  {
    __typename: "Resource",
    id: string,
    type: string | null,
    menuTitle: string | null,
    title: string | null,
    image:  {
      __typename: "Image",
      userId: string | null,
      filenameSmall: string | null,
      filenameMedium: string | null,
      filenameLarge: string | null,
      filenameUpload: string | null,
    } | null,
    description: string | null,
    extendedDescription: string | null,
    series:  {
      __typename: "ModelResourceSeriesConnection",
      items:  Array< {
        __typename: "ResourceSeries",
        id: string,
        type: string | null,
        title: string | null,
        description: string | null,
        image: string | null,
        category: Array< string | null > | null,
        status: string | null,
        allFiles: string | null,
        playlist: string | null,
        playlistImage: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    root:  {
      __typename: "ResourceRoot",
      id: string,
      type: string | null,
      resources:  {
        __typename: "ModelResourceConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteResourceSubscription = {
  onDeleteResource:  {
    __typename: "Resource",
    id: string,
    type: string | null,
    menuTitle: string | null,
    title: string | null,
    image:  {
      __typename: "Image",
      userId: string | null,
      filenameSmall: string | null,
      filenameMedium: string | null,
      filenameLarge: string | null,
      filenameUpload: string | null,
    } | null,
    description: string | null,
    extendedDescription: string | null,
    series:  {
      __typename: "ModelResourceSeriesConnection",
      items:  Array< {
        __typename: "ResourceSeries",
        id: string,
        type: string | null,
        title: string | null,
        description: string | null,
        image: string | null,
        category: Array< string | null > | null,
        status: string | null,
        allFiles: string | null,
        playlist: string | null,
        playlistImage: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    root:  {
      __typename: "ResourceRoot",
      id: string,
      type: string | null,
      resources:  {
        __typename: "ModelResourceConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateResourceSeriesSubscription = {
  onCreateResourceSeries:  {
    __typename: "ResourceSeries",
    id: string,
    type: string | null,
    title: string | null,
    description: string | null,
    image: string | null,
    category: Array< string | null > | null,
    status: string | null,
    allFiles: string | null,
    playlist: string | null,
    playlistImage: string | null,
    episodes:  {
      __typename: "ModelResourceEpisodeConnection",
      items:  Array< {
        __typename: "ResourceEpisode",
        id: string,
        episodeNumber: number | null,
        type: string | null,
        title: string | null,
        description: string | null,
        videoPreview: string | null,
        videoLowRes: string | null,
        videoHiRes: string | null,
        lessonPlan: string | null,
        activityPage: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    resource:  {
      __typename: "Resource",
      id: string,
      type: string | null,
      menuTitle: string | null,
      title: string | null,
      image:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      description: string | null,
      extendedDescription: string | null,
      series:  {
        __typename: "ModelResourceSeriesConnection",
        nextToken: string | null,
      } | null,
      root:  {
        __typename: "ResourceRoot",
        id: string,
        type: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateResourceSeriesSubscription = {
  onUpdateResourceSeries:  {
    __typename: "ResourceSeries",
    id: string,
    type: string | null,
    title: string | null,
    description: string | null,
    image: string | null,
    category: Array< string | null > | null,
    status: string | null,
    allFiles: string | null,
    playlist: string | null,
    playlistImage: string | null,
    episodes:  {
      __typename: "ModelResourceEpisodeConnection",
      items:  Array< {
        __typename: "ResourceEpisode",
        id: string,
        episodeNumber: number | null,
        type: string | null,
        title: string | null,
        description: string | null,
        videoPreview: string | null,
        videoLowRes: string | null,
        videoHiRes: string | null,
        lessonPlan: string | null,
        activityPage: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    resource:  {
      __typename: "Resource",
      id: string,
      type: string | null,
      menuTitle: string | null,
      title: string | null,
      image:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      description: string | null,
      extendedDescription: string | null,
      series:  {
        __typename: "ModelResourceSeriesConnection",
        nextToken: string | null,
      } | null,
      root:  {
        __typename: "ResourceRoot",
        id: string,
        type: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteResourceSeriesSubscription = {
  onDeleteResourceSeries:  {
    __typename: "ResourceSeries",
    id: string,
    type: string | null,
    title: string | null,
    description: string | null,
    image: string | null,
    category: Array< string | null > | null,
    status: string | null,
    allFiles: string | null,
    playlist: string | null,
    playlistImage: string | null,
    episodes:  {
      __typename: "ModelResourceEpisodeConnection",
      items:  Array< {
        __typename: "ResourceEpisode",
        id: string,
        episodeNumber: number | null,
        type: string | null,
        title: string | null,
        description: string | null,
        videoPreview: string | null,
        videoLowRes: string | null,
        videoHiRes: string | null,
        lessonPlan: string | null,
        activityPage: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    resource:  {
      __typename: "Resource",
      id: string,
      type: string | null,
      menuTitle: string | null,
      title: string | null,
      image:  {
        __typename: "Image",
        userId: string | null,
        filenameSmall: string | null,
        filenameMedium: string | null,
        filenameLarge: string | null,
        filenameUpload: string | null,
      } | null,
      description: string | null,
      extendedDescription: string | null,
      series:  {
        __typename: "ModelResourceSeriesConnection",
        nextToken: string | null,
      } | null,
      root:  {
        __typename: "ResourceRoot",
        id: string,
        type: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateResourceEpisodeSubscription = {
  onCreateResourceEpisode:  {
    __typename: "ResourceEpisode",
    id: string,
    episodeNumber: number | null,
    type: string | null,
    title: string | null,
    description: string | null,
    videoPreview: string | null,
    videoLowRes: string | null,
    videoHiRes: string | null,
    lessonPlan: string | null,
    activityPage: string | null,
    series:  {
      __typename: "ResourceSeries",
      id: string,
      type: string | null,
      title: string | null,
      description: string | null,
      image: string | null,
      category: Array< string | null > | null,
      status: string | null,
      allFiles: string | null,
      playlist: string | null,
      playlistImage: string | null,
      episodes:  {
        __typename: "ModelResourceEpisodeConnection",
        nextToken: string | null,
      } | null,
      resource:  {
        __typename: "Resource",
        id: string,
        type: string | null,
        menuTitle: string | null,
        title: string | null,
        description: string | null,
        extendedDescription: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateResourceEpisodeSubscription = {
  onUpdateResourceEpisode:  {
    __typename: "ResourceEpisode",
    id: string,
    episodeNumber: number | null,
    type: string | null,
    title: string | null,
    description: string | null,
    videoPreview: string | null,
    videoLowRes: string | null,
    videoHiRes: string | null,
    lessonPlan: string | null,
    activityPage: string | null,
    series:  {
      __typename: "ResourceSeries",
      id: string,
      type: string | null,
      title: string | null,
      description: string | null,
      image: string | null,
      category: Array< string | null > | null,
      status: string | null,
      allFiles: string | null,
      playlist: string | null,
      playlistImage: string | null,
      episodes:  {
        __typename: "ModelResourceEpisodeConnection",
        nextToken: string | null,
      } | null,
      resource:  {
        __typename: "Resource",
        id: string,
        type: string | null,
        menuTitle: string | null,
        title: string | null,
        description: string | null,
        extendedDescription: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteResourceEpisodeSubscription = {
  onDeleteResourceEpisode:  {
    __typename: "ResourceEpisode",
    id: string,
    episodeNumber: number | null,
    type: string | null,
    title: string | null,
    description: string | null,
    videoPreview: string | null,
    videoLowRes: string | null,
    videoHiRes: string | null,
    lessonPlan: string | null,
    activityPage: string | null,
    series:  {
      __typename: "ResourceSeries",
      id: string,
      type: string | null,
      title: string | null,
      description: string | null,
      image: string | null,
      category: Array< string | null > | null,
      status: string | null,
      allFiles: string | null,
      playlist: string | null,
      playlistImage: string | null,
      episodes:  {
        __typename: "ModelResourceEpisodeConnection",
        nextToken: string | null,
      } | null,
      resource:  {
        __typename: "Resource",
        id: string,
        type: string | null,
        menuTitle: string | null,
        title: string | null,
        description: string | null,
        extendedDescription: string | null,
      } | null,
    } | null,
  } | null,
};
