<template>
    <v-layout row wrap>
        <v-flex xs4 offset-xs4>
            <v-card hover raised>
                <v-card-row img="https://images.unsplash.com/photo-1439886183900-e79ec0057170?dpr=1&auto=compress,format&fit=crop&w=991&h=608&q=80&cs=tinysrgb&crop=" height="300px"></v-card-row>
                <v-card-row class="green darken-1">
                    <v-card-title>
                        <span class="white--text">Login Iwukua</span>
                        <v-spacer></v-spacer>
                        <div>
                            <v-menu id="marriot" bottom left origin="top right">
                                <v-btn icon="icon" slot="activator" class="white--text">
                                    <v-icon>more_vert</v-icon>
                                </v-btn>
                                <v-list>
                                    <v-list-item>
                                        <v-list-tile>
                                            <v-list-tile-title>Never show rewards</v-list-tile-title>
                                        </v-list-tile>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-tile>
                                            <v-list-tile-title>Remove Card</v-list-tile-title>
                                        </v-list-tile>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-tile>
                                            <v-list-tile-title>Send Feedback</v-list-tile-title>
                                        </v-list-tile>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </v-card-title>
                </v-card-row>
                <v-card-text>
                    <v-card-row height="75px">
                        <v-icon class="mr-5" dark>card_membership</v-icon>
                        <div>
                            <div>Membership Number</div><strong>113241423</strong>
                        </div>
                    </v-card-row>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-row actions>
                    <v-btn flat class="green--text darken-1">View Email</v-btn>
                </v-card-row>
            </v-card>
        </v-flex>
    </v-layout>
</template>
