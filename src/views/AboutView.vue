<template>
  <v-container fluid>

    <v-row justify="center">
      <v-subheader><h1>Sobre nós</h1></v-subheader>

      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(message, i) in messages"
          :key="i"
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row
              align="center"
              class="spacer"
              no-gutters
            >
              <v-col
                cols="4"
                sm="2"
                md="1"
              >
                <v-avatar
                  size="36px"
                >
                  <v-img
                    v-if="message.avatar"
                    alt="Avatar"
                    :src="message.avatar"
                  />
                  <v-icon
                    v-else
                    :color="message.color"
                    v-text="message.icon"
                  ></v-icon>
                </v-avatar>
              </v-col>

              <v-col
                class="hidden-xs-only"
                sm="5"
                md="3"
              >
                <strong v-html="message.github"></strong>
                <span
                  v-if="message.total"
                  class="grey--text"
                >
                  &nbsp;({{ message.total }})
                </span>
              </v-col>

              <v-col
                class="text-no-wrap"
                cols="5"
                sm="3"
              >
                <v-chip
                  v-if="message.commits"
                  :color="`${message.color} lighten-4`"
                  class="ml-0 mr-2 black--text"
                  label
                  small
                >
                  {{ message.commits }} commits
                </v-chip>
                <strong v-html="message.name"></strong>
              </v-col>

              <v-col
                v-if="message.excerpt"
                class="grey--text text-truncate hidden-sm-and-down"
              >
                &mdash;
                {{ message.excerpt }}
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text v-text="message.lorem"></v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>

	</v-container>
</template>

<script>
  export default {
    data: () => ({
      messages: [
        {
          avatar: 'https://avatars.githubusercontent.com/u/68570989?v=4',
          name: 'Bruna Campos',
          github: '@brunacamposxx',
          excerpt: 'Thank you for joining our community...',
					lorem: 'https://github.com/brunacamposxx https://www.linkedin.com/in/brunacamposxx/'
				},
        {
          avatar: 'https://avatars.githubusercontent.com/u/100145905?v=4',
          name: 'Guilherme Duarte',
          github: '@duartegui',
          excerpt: 'Thank you for joining our community...',
					lorem: 'ola como vai guilherme '
				},
        {
          avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQEv75PCEhz2bA/profile-displayphoto-shrink_800_800/0/1588019273592?e=2147483647&v=beta&t=unt5smiE8W7f1i94TspsWeroUdQOiMhgFumX4Y9uPGc',
          name: 'Larissa Dinart',
          github: '@larissadinart',
          excerpt: 'Thank you for joining our community...',
					lorem: 'ola como vai Larissa'
				},
				{
          avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQH5FBBIjQmykg/profile-displayphoto-shrink_800_800/0/1645122007558?e=2147483647&v=beta&t=IumXDrSbmTV4aYF41l78bFZT-hhGc5v3xWZgn0JGoPs',
          name: 'Mariana Bulhões de Lima',
          github: '@bulhoesmari',
          excerpt: 'Thank you for joining our community...',
					lorem: 'ola como vai Mariana'

				},
        {
          avatar: 'https://avatars.githubusercontent.com/u/71824475?v=4',
          name: 'Rebeca Maria Fialho Camilo',
          github: '@rebecacamilo',
          excerpt: 'Thank you for joining our community...',
					lorem: 'ola como vai Rebeca'
				},
        {
          avatar: 'https://scontent.fcgh50-1.fna.fbcdn.net/v/t1.6435-1/40160629_1112069558940839_1698934370460499968_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=nX6mYSQLX68AX_R_UtN&_nc_ht=scontent.fcgh50-1.fna&oh=00_AT-N4KgjMIOlDVX4F5rd0kz945aCJjOPqEIBR0AX9HUIug&oe=625A9CC1',
          name: 'Vinicius Machado Ribeiro',
          github: '@vinicius-m9',
          excerpt: 'Thank you for joining our community...',
					lorem: 'ola como vai Vinicius'
				},
				{
          color: 'red',
          icon: 'mdi-github',
          name: 'Repositório',
          commits: 23,
          total: 1,
          github: 'easter-egg-app',
					lorem: 'https://github.com/brunacamposxx/easter-egg-app'

        },
        // {
        //   color: 'teal',
        //   icon: 'mdi-tag',
        //   name: '',
        //   commits: 2,
        //   total: 4,
        //   github: '',
        //   exceprt: '',
        // },
      ],
      // lorem: 'ola como vai fora ',
    }),
  }
</script>
<style scope>
</style>
