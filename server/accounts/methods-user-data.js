/**
 * Created by Sora on 5/11/2016.
 */
Meteor.methods({

    userData: function () {

        if (!this.userId)
            throw new Meteor.Error(403, "User is not logged in");

        var query = {
            _id: this.userId
        };

        var filter = {
            fields: {
                username: 1,
                'profile.name': 1
            }
        };

        return Meteor.users.findOne(query, filter);

    }

});