# console.log 'Cofee'
# a = 10
# b = 10
# bool = true
# string = ''' 

#             Irure laborum eiusmod labore duis nisi exercitation id voluptate et labore sunt excepteur quis mollit. 
#             Sit irure qui commodo ea. Excepteur eiusmod sunt in est. Reprehenderit nulla voluptate laborum veniam eiusmod 
#             incididunt laboris officia amet consectetur nostrud amet. 
#             Nulla ad deserunt culpa nisi dolore voluptate sunt do deserunt ut aliqua commodo amet.

#             Anim adipisicing ea esse irure veniam nulla minim nulla enim. Ea reprehenderit ex culpa elit deserunt ex esse deserunt consequat sint. 
#             Nulla amet exercitation esse excepteur. Ullamco velit enim incididunt sunt ex irure non occaecat. Irure deserunt commodo ullamco pariatur. 
#             Dolore occaecat irure culpa pariatur consequat magna enim eu labore.

#             Mollit consectetur esse Lorem sunt laboris dolor ex ad aliquip ex. Nisi eu excepteur do ea cupidatat velit ut officia minim ea aliqua pariatur. 
#             Est ex amet in consectetur pariatur non fugiat. Tempor commodo voluptate sint ad quis irure eiusmod. Anim aliqua ad aliqua ut deserunt duis pariatur et consequat 
#             consequat sit culpa eu dolor. Nisi occaecat cupidatat aliqua in est cupidatat minim. Nisi dolor et consequat pariatur minim nisi cillum eiusmod qui.

#             In ullamco ut voluptate proident exercitation elit exercitation incididunt est ut quis. Officia sunt ad adipisicing velit laboris enim sit commodo. 
#             Lorem sint voluptate aliqua amet labore cillum Lorem cupidatat occaecat quis aliquip minim officia sint. Dolore aliquip velit non consectetur fugiat 
#             nulla elit esse culpa ullamco. Veniam in dolore qui cupidatat pariatur id anim anim esse ad qui magna.

#             Qui labore et amet laborum consectetur tempor pariatur magna consequat. Elit laboris do exercitation ea nulla. Et esse occaecat mollit nostrud. Sint 
#             incididunt pariatur nostrud eiusmod ipsum consequat proident labore eu sit elit duis laborum in. Elit eiusmod sit ut ad Lorem do commodo do sunt eu eu laborum ad qui. 
#             Dolor aliquip eu commodo aute deserunt esse aliquip ex consequat excepteur cillum in esse exercitation. Officia deserunt sunt sunt officia consectetur ad amet dolore dolore. '''

# name = "V"
# hello = "Hello #{name}"
# range = [10...5]
# range2 = [5..1]
# range3 = range + range2

# hey =
#     name: "Vadim"
#     age: 26



# [book, ele, page] = 
#     ['kay', '21', 15]



# user = 
#     name: 'Vadin'
#     age: 90

# # this.age = config.age ? 10

# # show if ready is "1" then "2" else "3" 
# state = 2

# console.log "Mes: [#{state}] #{
#     switch state
#         when 0 then "0"
#         when 1 then "1"
#         when 2 then "2"}"

# console.log prime =(i for i in [0..20] by 2)
    
# abla = console.log "dffsdfffsffssf"

# func = (name) -> 
#     "Hello #{name}"
# console.log func 'vadym'

# array = [1..5]
# console.log elem for elem in array

# str = +380935101390 + ''
# str2 = str.split('')
# str3 = str2.splice(5,3,'***')
# str4 = str3.join('')
# console.log range3
# console.log str2
# console.log str3
# console.log str4
# console.log book





# $ ->
#   class Drawer
#     constructor: ->
#       @el = -> $('.drawer')
#       @bind()
#       @fixHeight()

#     open: ->
#       $('html').addClass 'no-scroll drawer-open'
#       return false

#     close: ->
#       $('html').removeClass 'no-scroll drawer-open'

#     bind: ->
#       $('.body-overlay').on 'click touchmove', => @close()
#       $('.open-drawer').on 'click', => @open()
#       @el().find('ul li a').on 'click', => @close()
#       $(document).on 'page:load', => @close()

#     fixHeight: ->
#       $(window).resize =>
#         drawerHeight = 0
#         @el().find('.drawer-container').children().each ->
#           drawerHeight += $(@).height()
#         if ( $(window).height() < drawerHeight )
#           @el().addClass 'fixheight'
#         else
#           @el().removeClass 'fixheight'
#       $(window).resize()

#   new Drawer()

