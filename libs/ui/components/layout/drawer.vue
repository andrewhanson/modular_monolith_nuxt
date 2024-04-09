<template>
  <v-navigation-drawer color="grey-lighten-1">
    <v-card
      color="grey-lighten-4"
      elevation="0"
      flat
      tile
      :rounded="false"
    >
      <v-card-actions>
        
        <v-spacer/>
        <v-btn
          size="small"
          density="compact"
          @click="emit('update:drawer', false)"
          icon="mdi-menu"
        ></v-btn>
      </v-card-actions>
    </v-card>

    <v-divider></v-divider>
    
    <v-card 
      color="white" 
      flat
      tile
      class="sidebar-nav h-100 font-xs"
      rounded="false"

    >
    <v-list-item density="compact" link title="Home" to="/">
        <template v-slot:prepend>
          <v-icon icon="mdi-home-outline"></v-icon>
        </template>
      </v-list-item>
      <v-list-item density="compact" link title="Recipes" to="recipes">
        <template v-slot:prepend>
          <v-icon icon="mdi-bowl-mix-outline"></v-icon>
        </template>
      </v-list-item>
      <v-list-item density="compact" link title="Users" to="users">
        <template v-slot:prepend>
          <v-icon icon="mdi-account"></v-icon>
        </template>
      </v-list-item>
    </v-card>
  </v-navigation-drawer>
</template>

<script setup>
  const emit = defineEmits(['update:drawer']);
</script>