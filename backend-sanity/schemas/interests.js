export default {
  name: 'interests',
  title: 'Interests',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'imgurl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
